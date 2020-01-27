import Vue from 'vue'
import VueRouter from 'vue-router'
import TabBar from '../components/TabBar'
import Home from '../views/Home.vue'
import Staking from '../views/Staking.vue'
import Goverance from '../views/Goverance.vue'
import Setting from '../views/Setting.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: TabBar,
    children: [
      {
        path: '',
        name: 'Ping Wallet',
        component: Home
      },
      {
        path: 'staking',
        name: '委托',
        component: Staking
      },
      {
        path: 'goverance',
        name: '治理',
        component: Goverance
      },
      {
        path: 'setting',
        name: '设置',
        component: Setting
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
