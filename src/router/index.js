import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '../components/Layout.vue'),
    children: [
      {
        path: 'address',
        component: () => import(/* webpackChunkName: "home" */ '../views/Address.vue'),
      },
      {
        path: 'goverance',
        component: () => import(/* webpackChunkName: "home" */ '../views/Goverance.vue'),
      },
      {
        path: '',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
      },
      {
        path: 'income',
        component: () => import(/* webpackChunkName: "home" */ '../views/Income.vue'),
      },
      {
        path: 'setting',
        component: () => import(/* webpackChunkName: "home" */ '../views/Setting.vue'),
      },
      {
        path: 'stake',
        component: () => import(/* webpackChunkName: "home" */ '../views/Stake.vue'),
      },
      {
        path: 'tx',
        component: () => import(/* webpackChunkName: "home" */ '../views/Tx.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
