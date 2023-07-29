import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import admin from './admin.js';
import user from './user.js';
import Cookies from 'js-cookie';
// import public from './public.js';
const routes = [
  {
    path: '/admin/login',
    component: import("../resources/views/pages/admin/login/index.vue"), 
  },
  {
    path: '/:catchAll(.*)',
    component: import("../resources/views/notfound404.vue"), 
  },
  ,...admin,...user];

const router = createRouter({
    history: createWebHistory(), // Use createWebHistory with the BASE_URL
    routes,
  });


  router.beforeEach((to, from, next) => {
    const isCookieValid = Cookies.get('admin_token') !== undefined;
    const isAdminRoute = to.matched.some(record => record.path.startsWith('/admin'));
    const isLoginPage = to.path === '/admin/login';
    if (!isCookieValid && isAdminRoute && !isLoginPage) {
      next('/admin/login');
    }else if(isCookieValid &&  isLoginPage){
      next('/admin/roles');

    } else  {
      next();
    }
  });
export default router;