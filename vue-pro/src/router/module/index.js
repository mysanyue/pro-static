export default {
  path: '/index',
  name: 'Index',
  redirect: '/page',
  component: () => import('@/components/layout'),
  children: [
    {
      path: '/page',
      name: 'Page',
      meta: { title: 'element-分页' },
      component: () => import(/* webpackChunkName: "page" */ '@/views/page'),
    },
    {
      path: '/table',
      name: 'Table',
      meta: { title: 'element-表格封装' },
      component: () => import(/* webpackChunkName: "table" */ '@/views/table'),
    },
  ],
}
