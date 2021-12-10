export default {
  path: '/index',
  name: 'Index',
  redirect: '/home',
  component: () => import('@/components/layout'),
  children: [
    {
      path: '/home',
      name: 'Home',
      meta: { title: '运营总览' },
      component: () => import(/* webpackChunkName: "home" */ '@/views/home'),
    },
  ],
}
