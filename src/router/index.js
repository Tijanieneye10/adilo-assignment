import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/recording",
      name: "recording",
      component: () => import("../views/RecordingView.vue"),
    },
    {
      path: "/record",
      name: "record",
      component: () => import("../views/RecordView.vue"),
    },
  ],
});

export default router;
