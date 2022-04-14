import Vue from 'vue';
import Router from 'vue-router';
import Admin from '@/views/Admin.vue';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';

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
      component: Home
    },

    {
      path: `/:locale(${i18n.availableLocales.join('|')})`,
      beforeEnter: (to, from, next) => {
        i18n.locale = to.params.locale;
        next('/');
      }
    },

    {
      path: '/admin',
      name: 'admin',
      component: Admin,
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
      component: Login,
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
      component: Signup,
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
      component: Home
    }
  ]
});
