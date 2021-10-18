import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/singlePlayer',
    name: 'singlePlayer',
    component: () => import('../views/single-player.vue')
  },
  {
    path: '/multiplayer',
    name: 'multiplayer',
    component: () => import('../views/multiplayer.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
