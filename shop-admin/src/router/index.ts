import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/index.vue'
import productRoutes from './modules/product'
import mediaRoutes from './modules/media'
import orderRoutes from './modules/order'
import permissionRoutes from './modules/permission'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        meta: { name: '首页' },
        component: () => import('@/views/home/index.vue'),
      },
      // 商品模块
      ...productRoutes,
      // 媒体模块
      ...mediaRoutes,
      // 订单模块
      ...orderRoutes,
      // 权限模块
      ...permissionRoutes,
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 路由守卫 - 进度条配置
router.beforeEach(() => {
  nprogress.start()
})
router.afterEach(() => {
  nprogress.done()
})

export default router
