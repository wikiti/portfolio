<template>
  <header class="header">
    <div class="languages">
      <a class="language" :class="locale" v-for="locale in alternativeLanguages" :key="locale"
           @click="changeLocale(locale)" >{{locale}}</a>
    </div>

    <h1>{{ $t("title") }}</h1>
    <hr>
    <h2>{{ $t("subtitle") }}</h2>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    alternativeLanguages() {
      const locales = Object.keys(this.$i18n.messages);
      return locales.filter(locale => locale !== this.$i18n.locale);
    }
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
};
</script>
