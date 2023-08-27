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
import Kontakti from '../views/Kontakti.vue'
import Papir from '../views/Papir.vue'
import Plastika from '../views/Plastika.vue'
import Mjesano from '../views/Mjesano.vue'
import Staklo from '../views/Staklo.vue'
import Metal from '../views/Metal.vue'
import Tekstil from '../views/Tekstil.vue'
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

  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      requiresAuth: false,
    },

  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
    meta: {
      requiresAuth: true,
    },

  },
  {
    path: '/status',
    name: 'Status',
    component: Status,
    meta: {
      requiresAuth: true,
    },

  },
  {
    path: '/report',
    name: 'Report',
    component: CreateReport,
    meta: {
      requiresAuth: true,
    },

  },
  {
    path: '/route',
    name: 'BinRoute',
    component: RouteBin,
    meta: {
      requiresAuth: true,
    },

  },
  {
    path: '/address',
    name: 'SendAddress',
    component: SendAddress,
    meta: {
      requiresAuth: true,
    },

  },
  {
    path: '/razvrstaj',
    name: 'Razvrstaj',
    component: Razvrstaj,
    meta: {
      requiresAuth: true,
    },

  },
  {
    path: '/kontakti',
    name: 'Kontakti',
    component: Kontakti,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/papir',
    name: 'Papir',
    component: Papir,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/plastika',
    name: 'Plastika',
    component: Plastika,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/mjesano',
    name: 'Mjesano',
    component: Mjesano,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/staklo',
    name: 'Staklo',
    component: Staklo,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/metal',
    name: 'Metal',
    component: Metal,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/tekstil',
    name: 'Tekstil',
    component: Tekstil,
    meta: {
      requiresAuth: true,
    },
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
