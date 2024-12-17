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

//meta: {title: (route) => `${route.name}/${route.params.pageNumber}/${route.params.cardsPerPage}`},


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {title: (route) => `home`},
    },
    {
      path: "/kartyak/:pageNumber/:cardsPerPage",
      name: "kartyak",
      component: () => import("../views/KartyakView.vue"),
      meta: {title: (route) => `${route.name}/${route.params.pageNumber}/${route.params.cardsPerPage}`},
 
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../components/Auth/Login.vue"),
      meta: {title: (route) => `login`},
    },
    {
      path: "/regisztracio",
      name: "regisztracio",
      component: () => import("../components/Auth/Registration.vue"),
      meta: {title: (route) => `regisztráció`},
    },
    {
      path: "/sportok",
      name: "sportok",
      component: () => import("../views/SportokView.vue"),
      beforeEnter: [checkIfNotLogged],
      meta: {title: (route) => `sportok`},
    },
    {
      path: "/osztalyok",
      name: "osztalyok",
      component: () => import("../views/OsztalyokView.vue"),
      beforeEnter: [checkIfNotLogged],
      meta: {title: (route) => `osztályok`},
    },
    { path: "/:pathMatch(.*)*", 
      name: "NotFound", 
      component: HomeView },
  ],
});

router.beforeEach((to, from, next) => {
  // document.title=  to.meta.title ? `Iskola - ${to.meta.title}` : 'Iskola';
  // document.title =`Iskola - ${to.meta.title(to)}`;
  document.title =`Iskola - ` + to.meta.title(to);
  next();
})

export default router;
