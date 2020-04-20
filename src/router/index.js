import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/country/:iso',
    name: 'CountryChart',
    component: () => import(/* webpackChunkName: "about" */ '../views/CountryChart.vue')
  },
  {
    path: '/country',
    name: 'Country',
    component: () => import(/* webpackChunkName: "about" */ '../views/Country.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
