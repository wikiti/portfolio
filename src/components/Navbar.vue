<template>
  <nav class="block">
    <div class="links block-half" v-if="currentUser">
      <router-link to='/' v-if="currentUser">{{ $t('navbar.home') }}</router-link>
      <router-link to='/admin' v-if="currentUserIsAdmin">{{ $t('navbar.admin') }}</router-link>
      <a @click="logout" v-if="currentUser">{{ $t('navbar.logout') }}</a>
    </div>
    <div :class="currentUser ? 'block-half' : 'block'">
      <a class="language" :class="locale" v-for="locale in alternativeLanguages" :key="locale"
          @click="changeLocale(locale)" >{{locale}}</a>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import auth from '@/utils/auth';

export default {
  name: 'Navbar',
  computed: {
    alternativeLanguages() {
      const locales = Object.keys(this.$i18n.messages);
      return locales.filter(locale => locale !== this.$i18n.locale);
    },
    ...mapGetters(['currentUser', 'currentUserIsAdmin'])
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    },
    logout() {
      auth.logout().finally(() => {
        this.$router.replace('/');
      });
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
