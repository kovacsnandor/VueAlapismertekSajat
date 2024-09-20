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
      path: '/szulotogyerek',
      name: 'szulotogyerek',
      component: () => import('../views/SzuloToGyerek.vue')
    },
    {
      path: '/szuloodavisszagyerek',
      name: 'szuloodavisszagyerek',
      component: () => import('../views/SzuloOdavisszaGyerek.vue')
    },
    {
      path: '/gyerekodavisszagyerek',
      name: 'gyerekodavisszagyerek',
      component: () => import('../views/GyerekOdavisszaGyerek.vue')
    },
    {
      path: '/sokgyerekgyerek',
      name: 'sokgyerekgyerek',
      component: () => import('../views/SokGyerekGyerek.vue')
    },
    {
      path: '/provideinject',
      name: 'provideinject',
      component: () => import('../views/ProvideInject.vue')
    }
  ]
})

export default router
