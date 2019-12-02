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
        meta: { title: '资产', keepAlive: false, icon: 'credit-card' }
      },
      {
        path: '/activity',
        name: 'Activity',
        component: () => import('@/views/PageActivity'),
        meta: { title: '账单', keepAlive: true, icon: 'schedule' }
      },
      {
        path: '/calculator',
        name: 'Calculator',
        component: () => import('@/views/PageCalculator'),
        meta: { title: '收益', keepAlive: true, icon: 'dollar' }
      },
      {
        path: '/setting',
        name: 'Setting',
        hidden: true,
        component: () => import('@/views/PageSetting'),
        meta: { title: '设置', keepAlive: true, icon: 'setting' }
      },
      {
        path: '/validators',
        name: 'Validators',
        component: () => import('@/views/PageValidators'),
        meta: { title: '质押', keepAlive: true, icon: 'team' }
      },
      {
        path: '/proposals',
        name: 'Proposals',
        component: () => import('@/views/PageProposals'),
        meta: { title: '治理', keepAlive: true, icon: 'fire' }
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
