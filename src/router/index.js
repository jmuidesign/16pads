import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Collection from "../pages/Collection.vue";
import About from "../pages/About.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/collection/pack:id",
    name: "collection",
    component: Collection,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
