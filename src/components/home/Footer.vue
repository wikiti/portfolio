<template>
  <footer class="block">
    <div class="location block-third">
      <h3>{{ $t('footer.location.title') }}</h3>
      <address>{{ $t('footer.location.body') }}</address>

    </div>

    <div class="social block-third">
      <h3>{{ $t('footer.social.title') }}</h3>

      <ul>
        <li v-for="social in socialLinks" :key="social.id">
          <a class="button" :href="social.url">
            <Icon :name="social.icon" scale="2" />
          </a>
        </li>
      </ul>
    </div>

    <div class="contact block-third">
      <h3>{{ $t('footer.contact.title') }}</h3>
      <dl>
        <dt>{{ $t('footer.contact.email.label') }}</dt>
        <dd>
          <a :href="`mailto:${$t('footer.contact.email.value')}`"
            >{{ $t('footer.contact.email.value') }}</a>
        </dd>
      </dl>
    </div>
  </footer>
</template>

<script>
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
      this.socialLinks = data;
    });
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/stylesheets/globals.scss";

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

dl {
  dt, dd {
    display: inline-block;
  }

  dd {
    margin-left: $small-spacing;
  }
}
</style>
