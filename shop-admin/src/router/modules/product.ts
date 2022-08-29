import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: 'product',
    name: 'product',
    meta: { name: '商品' },
    component: RouterView,
    children: [
      {
        path: 'product_list',
        name: 'product_list',
        meta: { name: '商品列表' },
        component: () => import('@/views/product/list/index.vue'),
      },
      {
        path: 'product_classify',
        name: 'product_classify',
        meta: { name: '商品分类' },
        component: () => import('@/views/product/classify/index.vue'),
      },
      {
        path: 'product_attr',
        name: 'product_attr',
        meta: { name: '商品规格' },
        component: () => import('@/views/product/attr/index.vue'),
      },
      {
        path: 'product_reply',
        name: 'product_reply',
        meta: { name: '商品评论' },
        component: () => import('@/views/product/reply/index.vue'),
      },
    ],
  },
]

export default routes
