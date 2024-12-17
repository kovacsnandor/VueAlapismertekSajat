import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAuthStore } from "../stores/useAuthStore.js";

function checkIfLogged() {
  const store = useAuthStore();
  if (store.user) return "/";
}

function checkIfNotLogged() {
  const store = useAuthStore();
  if (!store.user) return "/login";
}

const routeTitle = "Iskola";

      //meta: {title: `${routeTitle} - ${router.name}/${router.params.pageNumber}/${router.params.cardsPerPage}`},


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {title: `${routeTitle}`},
    },
    {
      path: "/kartyak/:pageNumber/:cardsPerPage",
      name: "kartyak",
      component: () => import("../views/KartyakView.vue"),
      meta: {title: `${routeTitle} - `},
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../components/Auth/Login.vue"),
      meta: {title: `${routeTitle} - `},
    },
    {
      path: "/regisztracio",
      name: "regisztracio",
      component: () => import("../components/Auth/Registration.vue"),
      meta: {title: `${routeTitle} `},
    },
    {
      path: "/sportok",
      name: "sportok",
      component: () => import("../views/SportokView.vue"),
      beforeEnter: [checkIfNotLogged],
      meta: {title: `${routeTitle} `},
    },
    {
      path: "/osztalyok",
      name: "osztalyok",
      component: () => import("../views/OsztalyokView.vue"),
      beforeEnter: [checkIfNotLogged],
      meta: {title: `${routeTitle} `},
    },
    { path: "/:pathMatch(.*)*", 
      name: "NotFound", 
      component: HomeView },
  ],
});

function beforeRouteEnter(to, from, next) {
  document.title = to.meta.title || 'Alapértelmezett cím';
  next();
}

export default router;
