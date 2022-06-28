import Vue from 'vue'
import VueRouter from 'vue-router'
import menu from './module/menu'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/page',
  },
  menu,
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
