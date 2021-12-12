import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './module'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/page',
  },
  index,
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
