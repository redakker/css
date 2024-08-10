// src/router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Navigator from '../components/Navigator.vue';
import Login from '../components/Login.vue';

// Define routes
const routes: Array<RouteRecordRaw> = [
  {
    path: '/css/',
    name: 'Navigator',
    component: Navigator,
  },
  {
    path: '/css/login',
    name: 'Login',
    component: Login,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes, // Short for `routes: routes`
});

export default router;
