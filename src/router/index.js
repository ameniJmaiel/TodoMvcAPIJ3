import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/todomvc",
    name: "todomvc",
    component: () =>
      import(/* webpackChunkName: "todomvc" */ "../views/Todomvc.vue")
  },
  {
    path: "/users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/Users.vue"),
    children: [
      {
        path: ":id",
        name: "user",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User.vue")
      }
    ]
  },
  {
    path: "/followers",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/followers.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
