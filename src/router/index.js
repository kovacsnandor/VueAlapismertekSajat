import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAuthStore } from "../stores/useAuthStore.js";

function checkIfLogged() {
  const store = useAuthStore();
  if (!store.user) return "/login";
}

function checkIfNotLogged() {
  const store = useAuthStore();
  if (!store.user) return "/login";
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/kartyak",
      name: "kartyak",
      component: () => import("../views/KartyakView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../components/Auth/Login.vue"),
    },
    {
      path: "/regisztracio",
      name: "regisztracio",
      component: () => import("../components/Auth/Registration.vue"),
    },
    {
      path: "/sportok",
      name: "sportok",
      component: () => import("../views/SportokView.vue"),
      beforeEnter: [checkIfNotLogged],
    },
    {
      path: "/osztalyok",
      name: "osztalyok",
      component: () => import("../views/OsztalyokView.vue"),
      beforeEnter: [checkIfNotLogged],
    },
    { path: "/:pathMatch(.*)*", 
      name: "NotFound", 
      component: HomeView },
  ],
});

export default router;
