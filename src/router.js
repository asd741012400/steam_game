import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
  path: '/',
    name: 'layout',
    component: resolve => require(['./views/layout/index.vue'], resolve),
    // redirect: '/Login',
    children: [
      //dome
      {
        path: '/aaa',
        name: 'aaa',
        component: resolve => require(['./views/business/aaa.vue'], resolve),
        meta: {
          title: 'dome'
        }
      },
      //未登录
      {
        path: '/NotLogin',
        name: 'NotLogin',
        component: resolve => require(['./views/business/NotLogin.vue'], resolve),
        meta: {
          title: '未登录'
        }
      },
      //绑定交易链接
      {
        path: '/BindingAccount',
        name: 'BindingAccount',
        component: resolve => require(['./views/business/BindingAccount.vue'], resolve),
        meta: {
          title: '绑定交易链接'
        }
      },
      //我的出售订单
      {
        path: '/OrderList',
        name: 'OrderList',
        component: resolve => require(['./views/business/OrderList.vue'], resolve),
        meta: {
          title: '我的出售订单'
        }
      },
      //回收填写转账单
      {
        path: '/FillInData',
        name: 'FillInData',
        component: resolve => require(['./views/business/FillInData.vue'], resolve),
        meta: {
          title: '回收填写转账单'
        }
      },
    ]
  },  
  // {
  //   path: '/Login',
  //   name: 'Login',
  //   component: () => import( './views/Login/Login.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
