import Vue from 'vue';
import Router from 'vue-router';
/*123123123*/
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
        //登录页面
        path: '/',
        component: resolve => require(['@/components/login/login'], resolve)
    }, {
        //后台管理页面
        path: '/adminIndex',
        component: resolve => require(['@/components/views/admin/index'], resolve),
        children: [{
            path: '/adminIndex/',
            component: resolve => require(['@/components/views/admin/orderList/orderList'], resolve),
        }, {
            path: '/adminIndex/uninsured',
            component: resolve => require(['@/components/views/admin/uninsuredList/uninsuredList'], resolve),
        }, {
            path: '/adminIndex/insuranceConfig',
            component: resolve => require(['@/components/views/admin/insuranceConfig/insuranceConfig'], resolve),
        }, {
            path: '/adminIndex/insuranceClaimsList',
            component: resolve => require(['@/components/views/admin/insuranceClaims/insuranceClaimsList'], resolve),
        },]
    }, {
        //前台页面
        path: '/webIndex',
        component: resolve => require(['@/components/views/web/index'], resolve),
        //前台页面
        children: [{
            path: '/webIndex/',
            component: resolve => require(['@/components/views/web/home/homeList'], resolve),
        }, {
            path: '/webIndex/InsuranceList',
            component: resolve => require(['@/components/views/web/insurance/insuranceList'], resolve),
        }, {
            path: '/webIndex/claimList',
            component: resolve => require(['@/components/views/web/claim/claimList'], resolve),
        }, {
            path: '/webIndex/paymentList',
            component: resolve => require(['@/components/views/web/payment/paymentList'], resolve),
        }, {
            path: '/webIndex/Details/:id',
            component: resolve => require(['@/components/views/web/claim/claimListDetails'], resolve),
        }]
    }, {path: '*', component: resolve => require(['@/components/common/error/err'], resolve)},

    ]
})
