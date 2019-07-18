import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '@/views/layout/Layout'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/',
      component: _import('layout/layout'),
      meta: {
        title: 'UNNU.ME'
      },
      children: [{
        path: '/',
        name: 'Photo',
        meta: {
          title: '摄影'
        },
        component: _import('index/index')
      }]
    }
  ]
})
