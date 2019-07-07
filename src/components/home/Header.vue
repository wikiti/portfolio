<template>
  <header class="header">
    <nav class="block">
      <div class="block-half">
        <router-link to='/admin' v-if="adminVisited">{{ $t('admin.title') }}</router-link>
      </div>
      <div class="block-half">
        <a class="language" :class="locale" v-for="locale in alternativeLanguages" :key="locale"
            @click="changeLocale(locale)" >{{locale}}</a>
      </div>
    </nav>

    <h1>{{ $t("title") }}</h1>
    <h1 class="subtitle">{{ $t("subtitle") }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    alternativeLanguages() {
      const locales = Object.keys(this.$i18n.messages);
      return locales.filter(locale => locale !== this.$i18n.locale);
    },
    adminVisited() {
      return localStorage.adminVisited;
    }
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/stylesheets/globals.scss";

nav :last-child {
  @extend %right-aligned;
}
</style>
