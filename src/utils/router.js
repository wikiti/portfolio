import Vue from 'vue';
import Router from 'vue-router';

import auth from '@/utils/auth';
import i18n from '@/utils/i18n';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },

    {
      path: `/:locale(${i18n.availableLocales.join('|')})`,
      beforeEnter: (to, from, next) => {
        i18n.locale = to.params.locale;
        next('/');
      }
    },

    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('@/views/Calendar.vue')
    },

    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/Admin.vue'),
      beforeEnter: (to, from, next) => {
        auth.checkAdminUser().then((user) => {
          if (user) {
            next();
            return;
          }

          next('/');
        });
      }
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      beforeEnter: (to, from, next) => {
        auth.checkUser().then((user) => {
          if (user) {
            next('/');
            return;
          }

          next();
        });
      }
    },

    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/Signup.vue'),
      beforeEnter: (to, from, next) => {
        auth.checkUser().then((user) => {
          if (user) {
            next('/');
            return;
          }

          next();
        });
      }
    },

    {
      path: '*',
      component: () => import('@/views/Home.vue')
    }
  ]
});
