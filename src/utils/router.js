import Vue from 'vue';
import Router from 'vue-router';
import Admin from '@/views/Admin.vue';
import Home from '@/views/Home.vue';
import Signin from '@/views/Signin.vue';
import Signup from '@/views/Signup.vue';

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
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforeEnter: (to, from, next) => {
        // TODO: Check if current user is admin
        next();
      }
    },

    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },

    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },

    {
      path: '*',
      component: Home
    }
  ]
});
