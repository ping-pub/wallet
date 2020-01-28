import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
