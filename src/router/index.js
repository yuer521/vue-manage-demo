import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Layout from "_views/layout";

Vue.use(Router)

const constantRoutes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/layout')
  }
];
const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: "首页",
      icon: ""
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
          title: "首页",
          icon: "",
          homePage: true
        },
      }
    ]
  }
]

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: [...constantRoutes, ...asyncRoutes]
  })

const router = createRouter();

export default router;

