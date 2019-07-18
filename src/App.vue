<template>
  <div id="app">
    <Navbar />

    <router-view/>
  </div>
</template>

<script>
import store from '@/store';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  store,
  components: { Navbar },
  mounted() {
    this.updateHtmlLang();
  },
  watch: {
    '$i18n.locale'() {
      this.updateHtmlLang();
    }
  },
  methods: {
    updateHtmlLang() {
      document.getElementsByTagName('html')[0].lang = this.$i18n.locale;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/stylesheets/globals.scss";
</style>
