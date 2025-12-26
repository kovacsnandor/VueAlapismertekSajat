import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/globaliskomponens',
      name: 'globaliskomponens',
      component: () => import('../views/GlobalisKomponens.vue'),
      meta: { title: 'Global && Local'}
    },
    {
      path: '/dinamikuskomponens',
      name: 'dinamikuskomponens',
      component: () => import('../views/DinamikusKomponens.vue'),
      meta: { title: 'Dinamikus'}
    },
    {
      path: '/slots',
      name: 'slots',
      component: () => import('../views/Slots.vue'),
      meta: { title: 'slot'}
    },
    {
      path: '/tegla',
      name: 'tegla',
      component: () => import('../views/Tegla.vue'),
      meta: { title: 'Tégla'}
    },
    {
      path: '/listapakolo',
      name: 'listapakolo',
      component: () => import('../views/ListaPakolo.vue'),
      meta: { title: 'Lista pkoló'}
    },
    {
      path: '/vslot',
      name: 'vslot',
      component: () => import('../views/Vslot.vue'),
      meta: { title: 'vslot'}
    },
    {
      path: '/piniacounter',
      name: 'piniacounter',
      component: () => import('../views/PiniaCounterView.vue'),
      meta: { title: 'Pinia Counter'}
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title=  to.meta.title ? `${to.meta.title} - Komponensek` : 'Komponensek';
  next();
})

export default router
