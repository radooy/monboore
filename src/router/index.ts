import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView/AboutView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView/RegisterView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
