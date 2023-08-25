import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Menu from '../views/Menu.vue'
import RouteBin from '../views/RouteBin.vue'
import CreateReport from '../views/CreateReport.vue'
import Status from '../views/Status.vue'
import SendAddress from '../views/SendAddress.vue'
import Razvrstaj from '../views/Razvrstaj.vue'
import GoBack from "@/components/GoBack";
import { createRouter, createWebHistory } from 'vue-router';
import { getAuth } from 'firebase/auth';

Vue.use(VueRouter);

const auth = getAuth();

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false,
    },
    //component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      requiresAuth: false,
    },
    //component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
    meta: {
      requiresAuth: true,
    },
    //component: () => import(/* webpackChunkName: "about" */ '../views/Menu.vue')
  },
  {
    path: '/status',
    name: 'Status',
    component: Status,
    meta: {
      requiresAuth: true,
    },
    //component: () => import(/* webpackChunkName: "about" */ '../views/Status.vue')
  },
  {
    path: '/report',
    name: 'Report',
    component: CreateReport,
    meta: {
      requiresAuth: true,
    },
    //component: () => import(/* webpackChunkName: "about" */ '../views/CreateReport.vue')
  },
  {
    path: '/route',
    name: 'BinRoute',
    component: RouteBin,
    meta: {
      requiresAuth: true,
    },
    //component: () => import(/* webpackChunkName: "about" */ '../views/RouteBin.vue')
  },
  {
    path: '/address',
    name: 'SendAddress',
    component: SendAddress,
    meta: {
      requiresAuth: true,
    },
    //component: () => import(/* webpackChunkName: "about" */ '../views/SendAddress.vue')
  },
  {
    path: '/razvrstaj',
    name: 'Razvrstaj',
    component: Razvrstaj,
    meta: {
      requiresAuth: true,
    },
    //component: () => import(/* webpackChunkName: "about" */ '../views/Razvrstaj.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
