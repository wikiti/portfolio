<template>
  <footer class="block">
    <div class="block-third">
      <h3>{{ $t("home.footer.location.title") }}</h3>
      <address>{{ $t("home.footer.location.body") }}</address>
    </div>

    <div class="block-third">
      <h3>{{ $t("home.footer.social.title") }}</h3>

      <ul>
        <li v-for="social in socialLinks" :key="social.id">
          <a class="button" :href="social.url" target="_blank">
            <Icon :name="social.icon" scale="2" />
          </a>
        </li>
      </ul>
    </div>

    <div class="block-third">
      <h3>{{ $t("home.footer.contact.title") }}</h3>
      <a :href="`mailto:${$t('home.footer.contact.email.value')}`">{{
        $t("home.footer.contact.email.value")
      }}</a>
    </div>

    <div v-html="$t('home.footer.tools')" class="tools" />
  </footer>
</template>

<script>
import { orderBy } from 'lodash';
import { mapActions } from 'vuex';
import Icon from 'vue-awesome/components/Icon.vue';

import social from '@/resources/social';

export default {
  name: 'Footer',
  components: { Icon },
  data() {
    return { socialLinks: {} };
  },
  mounted() {
    social.get().then((data) => {
      this.socialLinks = orderBy(data, 'priority', 'asc');
      this.moduleLoaded('social');
    });
  },
  methods: {
    ...mapActions(['moduleLoaded'])
  }
};
</script>

<style scoped lang='scss'>
@import '@/assets/stylesheets/globals.scss';

footer {
  @extend %centered;

  @include respond-to(small) {
    text-align: unset;
  }

  margin-top: $large-spacing;
}

h3 {
  @include respond-to(small) {
    margin-top: $medium-spacing;
  }
}

ul {
  list-style: none;

  li {
    display: inline-block;

    &:not(:first-child) {
      margin-left: $small-spacing;
    }
  }
}

.tools {
  &,
  ::v-deep a {
    @include small-font;
  }

  margin-top: $large-spacing;
}
</style>
