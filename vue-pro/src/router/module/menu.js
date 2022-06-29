export default {
  path: '/index',
  name: 'Index',
  redirect: '/page',
  component: () => import('@/components/layout'),
  children: [
    {
      path: '/page',
      name: 'Page',
      component: () => import(/* webpackChunkName: "page" */ '@/views/page'),
    },
    {
      path: '/table',
      name: 'Table',
      component: () => import(/* webpackChunkName: "table" */ '@/views/table'),
    },
    {
      path: '/select',
      name: 'Select',
      component: () => import(/* webpackChunkName: "select" */ '@/views/select'),
    },
  ],
}
