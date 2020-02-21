/*
 * @Author: your name
 * @Date: 2020-02-08 14:56:46
 * @LastEditTime: 2020-02-22 01:36:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /ping-wallet/ping-wallet/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [,
  {
    path: '/cosmos',
    component: () => import('../components/common/ledger-cosmos')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '../components/base-tabbar'),
    children: [
      {
        path: '',
        name: 'WalletPortfolio',
        component: () => import(/* webpackChunkName: "home" */ '../components/wallet-portfolio')
      },
      {
        path: 'staking',
        name: 'Staking',
        component: () => import(/* webpackChunkName: "home" */ '../components/staking')
      },
      {
        path: 'governance-list',
        name: 'Governances',
        component: () => import(/* webpackChunkName: "home" */ '../components/governance-list')
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import(/* webpackChunkName: "home" */  '../components/setting')
      },
    ]
  },
  {
    path: '/:component',
    component: () => import('../views/BasePage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
