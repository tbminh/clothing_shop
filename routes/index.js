import {createRouter, createWebHistory} from 'vue-router';
import admin from './admin.js';
// import public from './public.js';
const routes = [...admin];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;