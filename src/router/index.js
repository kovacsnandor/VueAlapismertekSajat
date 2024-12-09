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
      path: '/personstable',
      name: 'personstable',
      component: () => import('../views/PersonsTable.vue')
    },
    {
      path: '/professionstable',
      name: 'professionstable',
      component: () => import('../views/ProfessionsTable.vue')
    }
  ]
})

export default router
