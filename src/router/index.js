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
      children: [
        {
          path: '/',
          name: 'Photo',
          meta: {
            title: '摄影'
          },
          component: _import('index/index'),
          children: []
        },
        // {
        //   path: '/:hash',
        //   name: 'Detail',
        //   meta: {
        //     title: '详情'
        //   },
        //   component: _import('index/detail')
        // },
        {
          path: '/a',
          name: 'ArticleList',
          meta: {
            title: 'Article'
          },
          component: _import('article/list')
        },
        {
          path: '/a/:hash',
          name: 'ArticleDetail',
          meta: {
            title: 'Article'
          },
          component: _import('article/detail')
        },
        {
          path: '/porn',
          name: 'Porn',
          meta: {
            title: 'Porn'
          },
          component: _import('index/porn')
        }
      ]
    }
  ]
})
