import Vue from 'vue'
import VueRouter from 'vue-router'
import TabBar from '../components/base-tabbar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: TabBar,
    children: [
      {
        path: '',
        name: 'WalletPortfolio',
        component: () => import(/* webpackChunkName: "home" */ '../views/WalletPortfolio.vue')
      },
      {
        path: 'staking',
        name: 'Staking',
        component: () => import(/* webpackChunkName: "home" */ '../views/Staking.vue')
      },
      {
        path: 'governances',
        name: 'Governances',
        component: () => import(/* webpackChunkName: "home" */ '../views/Governances.vue')
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import(/* webpackChunkName: "home" */  '../views/Setting.vue')
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
