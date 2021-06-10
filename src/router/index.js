import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Travels from "../views/Travels.vue";
import Spain from "../components/Spain.vue";
import Finland from "../components/Finland.vue";
import Czech from "../components/Czech.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/travels",
    name: "Travels",
    component: Travels,
    children: [
      { path: "spain", name: "spain", component: Spain },
      { path: "finland", name: "finland", component: Finland },
      { path: "czech", name: "czech", component: Czech },
    ],
  },
  {
    path: "/404",
    // alias: "*",
    name: "notFound",
    component: () => import("../views/NotFound.vue"),
  },
  // 使用router.beforeEach，將redirect註解掉
  // {
  //   path: "*",
  //   redirect: "/404",
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    //沒有對應到設定的路由，回重新導向404
    next("/404");
  } else {
    //有對應到設定的路由，繼續執行
    next();
  }
});

export default router;
