const IpConfig = {
    develop: {
        // api:'http://192.168.89.221:48080/insu-web-rest/',
        api:'http://gateway.zhiguoguo.net/',
        // imgUrl:'http://192.168.89.215/',
        imgUrl:'http://gateway.zhiguoguo.net/',
        // pcImg:'http://192.168.89.215/'
        pcImg:'http://gateway.zhiguoguo.net/'
    },
    staging: {
        // api:'http://insu-api.zhiguoguo.cn/insu-web-rest/',
        api:'http://gateway.zhiguoguo.cn/insu-web-rest/',
        imgUrl:'http://101.201.72.4:81/',
        // pcImg:'https://pc.zhiguoguo.com/pc-web-rest/'
        pcImg:'http://gateway.zhiguoguo.cn/pc-web-rest/'
    },
    production: {
        // api:'https://insu-api.zhiguoguo.com/insu-web-rest/',
        api:'https://gateway.zhiguoguo.com/insu-web-rest/',
        imgUrl:'https://resource.zhiguoguo.com/',
        pcImg:'https://resource.zhiguoguo.com/'
    },
}

//通过环境配置环境地址
if (process.env.NODE_ENV === 'development') {
    module.exports.config = IpConfig.develop;
// 编译环境
} else {
    // 测试环境
    if (process.env.type === 'test') {
        module.exports.config = IpConfig.staging;
        // 正式环境
    } else {
        module.exports.config = IpConfig.production;
    }
}

