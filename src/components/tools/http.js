import axios from 'axios';
import { Message, Loading } from 'element-ui';
import Cookies from 'js-cookie';
import router from '@/router/index'
let loading
function startLoading() {
    loading = Loading.service({
        lock: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
function endLoading() {
    loading.close()
}
let needLoadingRequestCount = 0
export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}

//http request 拦截器
axios.interceptors.request.use(
    config => {
        var token = ''
        if(typeof Cookies.get('user') === 'undefined'){
            //此时为空
        }else {
            token = JSON.parse(Cookies.get('user')).token
        }//注意使用的时候需要引入cookie方法，推荐js-cookie
        config.data = JSON.stringify(config.data);
        config.headers['Content-Type'] = 'application/json';
        if(token !== ''){
          config.headers.token = token;
        }
        showFullScreenLoading()
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);

//http response 拦截器
axios.interceptors.response.use(
    response => {
        //当返回信息为未登录或者登录失效的时候重定向为登录页面
        if(response.data.code === 'W_100004' || response.data.message === '用户未登录或登录超时，请登录！'){
            router.push({
                path:"/",
                querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
            })
        }
        tryHideFullScreenLoading()
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)

/**
 * 封装get方法
 * @param url
 * @param params
 * @param headers
 * @returns {Promise}
 */
export function fetch(url, params={}, headers={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params: params,
            headers: headers
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @param headers
 * @returns {Promise}
 */
export function post(url, data = {}, headers = {}){
    return new Promise((resolve, reject) => {
        axios.post(url, data, headers)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}

/**
 * 封装导出文件请求
 * @param url
 * @param data
 * @param headers
 * @returns {Promise}
 */
export function exportExcel(url, data = {}, headers = {}){
    return new Promise((resolve,reject) => {
        axios({
            method: 'post',
            url: url, // 请求地址
            data: data, // 参数
            headers: headers,
            responseType: 'blob' // 表明返回服务器返回的数据类型
        })
        .then(response => {
            if(response.status === 200 && response.statusText === 'OK') {
                let blob = new Blob([response.data], {type: response.data.type}), fileName;
                switch (response.data.type) {
                    case 'text/xml':
                        fileName = "订单列表_"+Date.parse(new Date())+".xls";
                        break;
                    case 'application/octet-stream':
                        fileName = data.name + ".zip";
                        break;
                }
                if (window.navigator.msSaveOrOpenBlob) {
                    navigator.msSaveBlob(blob, fileName);
                } else {
                    let downloadElement = document.createElement('a');
                    downloadElement.href = window.URL.createObjectURL(blob); //创建下载的链接
                    downloadElement.download = fileName; //下载后文件名
                    document.body.appendChild(downloadElement);
                    downloadElement.click(); //点击下载
                    document.body.removeChild(downloadElement); //下载完成移除元素
                    window.URL.revokeObjectURL(downloadElement.href); //释放blob对象
                }
            }else {
                this.$message({
                    type:'error',
                    message:response.statusText
                })
            }

        },err => {
            reject(err)
        })
    })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @param headers
 * @returns {Promise}
 */
export function patch(url,data = {},headers = {}){
    return new Promise((resolve,reject) => {
        axios.patch(url,data,headers)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @param headers
 * @returns {Promise}
 */
export function put(url,data = {}, headers = {}){
    return new Promise((resolve,reject) => {
        axios.put(url,data,headers)
            .then(response => {
                resolve(response.data);
            },err => {
                reject(err)
            })
    })
}
