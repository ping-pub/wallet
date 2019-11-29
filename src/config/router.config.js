// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout, PageView } from '@/layouts'

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
        component: () => import('@/views/PageWallet'),
        meta: { title: 'Wallet', keepAlive: false, icon: 'credit-card' }
      },
      {
        path: '/activity',
        name: 'Activity',
        component: () => import('@/views/PageActivity'),
        meta: { title: 'Activity', keepAlive: true, icon: 'schedule' }
      },
      {
        path: '/validators',
        name: 'Validators',
        component: () => import('@/views/PageValidators'),
        meta: { title: 'Validators', keepAlive: true, icon: 'team' }
      },
      {
        path: '/proposals',
        name: 'Proposals',
        component: () => import('@/views/PageProposals'),
        meta: { title: 'Proposals', keepAlive: true, icon: 'fire' }
      },
      {
        path: '/network',
        name: 'Network',
        meta: { title: 'Network', icon: 'form', keepAlive: true },
        component: () => import('@/views/PageNetwork'),
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
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/Page404')
  }

]
