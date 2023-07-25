import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import admin from './admin.js';
import user from './user.js';
// import public from './public.js';
const routes = [...admin,...user];

const router = createRouter({
    history: createWebHistory(), // Use createWebHistory with the BASE_URL
    routes,
  });
export default router;