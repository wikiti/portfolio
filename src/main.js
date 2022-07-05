import Vue from 'vue';
import App from '@/App.vue';
import router from '@/utils/router';
import i18n from '@/utils/i18n';

import 'vue-awesome/icons/brands/artstation';
import 'vue-awesome/icons/brands/facebook';
import 'vue-awesome/icons/brands/git';
import 'vue-awesome/icons/brands/github';
import 'vue-awesome/icons/brands/gitlab';
import 'vue-awesome/icons/brands/google-play';
import 'vue-awesome/icons/brands/linkedin';
import 'vue-awesome/icons/brands/twitter';
import '@/components/icons/sketchfab';

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app');
