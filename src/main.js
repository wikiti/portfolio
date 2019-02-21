import Vue from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';

import 'vue-awesome/icons/brands/facebook';
import 'vue-awesome/icons/brands/github';
import 'vue-awesome/icons/brands/linkedin';
import 'vue-awesome/icons/brands/twitter';

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app');
