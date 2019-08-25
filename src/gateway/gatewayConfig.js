/**
 * Created by jinlijing on 2019/2/22
 */
/*
* 重要注释，请勿删除.   2019-02-22 靳立晶
* 此文件为网关的配置文件，同 config.js 一样在 service 文件夹下，手动注入到每一个接口文件中，示例参考 service/businessService.js 文件：
*    1. 文件注入：
*       ` define(['service/config', 'service/gatewayConfig'], function (config, gateway) { `
*
*    2. 在 http 请求中引入：
*        `$http.post(config.businessUrl + 'zgOrderTrademark/getUrgentOrderTrademarkList', condition, {headers: gateway.admin}).success(function (data, status, headers, congfig) {
*               defer.resolve(data);
*           }).error(function (data, status, headers, congfig) {
*               defer.reject(data);
*           })`;
*
*    3. 作用：在每个接口中加入请求头，根据接口来源不同，请求头中的参数也不同。（ 接口来源所属平台从后台人员处获取 ）
*
*    4. 备注：网关相关信息说明文件地址：http://101.201.72.4/zgg_source/zgg_datadoc/blob/master/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB/%E7%BD%91%E5%85%B3%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.md
*
*    5. 后台对应项目：com/cn/net 分别对应 正式/仿真/开发 环境，
*       开发环境接口地址只有域名没有项目名：http://crm-api.zhiguoguo.net
*       仿真和正式环境接口地址是域名+项目名的形式：http://crm-api.zhiguoguo.cn/crm-web-rest  |  http://crm-api.zhiguoguo.com/crm-web-rest
*
*       CRM：域名: http://crm-api.zhiguoguo.cn
*           项目名称: crm-web-rest
*       PC: 域名：http://pc-api.zhiguoguo.cn
*           项目名称: pc-web-rest
*       insurance: 域名：http://insu-api.zhiguoguo.cn
*                  项目名称: insu-web-rest
*       admin: 域名：http://project-api.zhiguoguo.cn
*              项目名称:zgg-web-admin-rest
*       base: 域名：http://base-api.zhiguoguo.cn
*             项目名称:base-web-rest
*       OSS: 域名：http://oss-staging.zhiguoguo.cn
*            项目名称:fastdfs
*
*    6. 项目后期会采用域名访问方式   http://gateway.zhiguoguo.com/xxxx.do(com / cn / net），没有项目名，
*       所以需要前端人员在每个接口的 request headers 中加入区分不同平台的参数，以供后期开发维护
*
* 重要注释，请勿删除.   2019-02-22 靳立晶
* */
const gatewayConfig = {
    // CRM系统, 项目名称："crm-web-rest"
    crm:  {
        'module' : 'crm',
        'app-id': '6e70493db301494492779b53d07ff7c5',
        'timestamps': new Date().getTime(),
        'version': 'v0.0.1'
    },

    // 业务后台, 项目名称："zgg-web-admin-rest"
    admin: {
        'module' : 'admin',
        'app-id': '6e70493db301494692779b53f07ff7c5',
        'timestamps': new Date().getTime(),
        'version': 'v0.0.1'
    },

    // PC官网, 项目名称："pc-web-rest"
    pc: {
        'module' : 'pc',
        'app-id': '6e70493db301494692779153d07ff7c5',
        'timestamps': new Date().getTime(),
        'version': 'v0.0.1'
    },

    // 保险系统, 项目名称："insu-web-rest"
    insurance: {
        'module' : 'insurance',
        'app-id': '6e70493db301494692779ba3d07ff7c5',
        'timestamps': new Date().getTime(),
        'version': 'v0.0.1'
    }
}
export default gatewayConfig
