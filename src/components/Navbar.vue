<template>
  <nav class="block">
    <div class="links block-half">
      <router-link to='/' v-if="adminUser">{{ $t('navbar.home') }}</router-link>
      <router-link to='/admin' v-if="adminUser">{{ $t('navbar.admin') }}</router-link>
      <a @click="logout" v-if="adminUser">{{ $t('navbar.logout') }}</a>
    </div>
    <div class="block-half">
      <a class="language" :class="locale" v-for="locale in alternativeLanguages" :key="locale"
          @click="changeLocale(locale)" >{{locale}}</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    alternativeLanguages() {
      const locales = Object.keys(this.$i18n.messages);
      return locales.filter(locale => locale !== this.$i18n.locale);
    },
    adminUser() {
      // TODO: Check if current user is admin user with vuex
      return true;
    }
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    },
    logout() {
      console.log('TODO: Logout');
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/stylesheets/globals.scss";

nav :last-child {
  @extend %right-aligned;
}

.links a {
  margin-right: $small-spacing;
}
</style>
