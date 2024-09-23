import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/globaliskomponens',
      name: 'globaliskomponens',
      component: () => import('../views/GlobalisKomponens.vue')
    },
    {
      path: '/dinamikuskomponens',
      name: 'dinamikuskomponens',
      component: () => import('../views/DinamikusKomponens.vue')
    },
    {
      path: '/slots',
      name: 'slots',
      component: () => import('../views/Slots.vue')
    },
    {
      path: '/tegla',
      name: 'tegla',
      component: () => import('../views/Tegla.vue')
    }
  ]
})

export default router
