// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'Home' },
    redirect: '/wallet',
    children: [
      {
        path: '/wallet',
        name: 'Wallet',
        component: () => import('@/views/dashboard/Analysis'),
        meta: { title: 'Wallet', keepAlive: false, permission: ['dashboard'], icon: 'credit-card' }
      },
      {
        path: '/validators',
        name: 'Validators',
        component: () => import('@/views/list/StandardList'),
        meta: { title: 'Validators', keepAlive: true, permission: ['table'], icon: 'team' }
      },
      {
        path: '/votes',
        name: 'Votes',
        component: () => import('@/views/list/StandardList'),
        meta: { title: 'Votes', keepAlive: true, permission: ['table'], icon: 'fire' }
      },
      {
        path: 'https://look.ping.pub/',
        name: 'Explorer',
        meta: { title: 'Explorer', target: '_blank', icon: 'database' }
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/Home')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
