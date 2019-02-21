<template>
  <div id="app">
    <!-- TODO: Loading spinner -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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
