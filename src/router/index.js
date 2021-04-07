import { createRouter, createWebHistory } from "vue-router";
import Records from "../views/Records.vue";

const routes = [
  {
    path: "/",
    name: "Records",
    component: Records,
  },
  {
    path: "/edit/:id",
    name: "EditRecord",
    component: () => import("../views/EditRecord.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
