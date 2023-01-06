import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/Home.vue";
import NotFound from "../Pages/NotFound.vue";

let history = createWebHistory();
let routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/:pathMath(.*)*",
    redirect: "/404",
  },
];

export default createRouter({ history, routes });
