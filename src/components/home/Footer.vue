<template>
  <footer>
    <div class="location">
      <h3>{{ $t('footer.location.title') }}</h3>
      <p>{{ $t('footer.location.body') }}</p>

    </div>

    <div class="social">
      <h3>{{ $t('footer.social.title') }}</h3>

      <ul>
        <li v-for="social in socialLinks" :key="social.id">
          <a :href="social.url">
            <Icon :name="social.icon" />
            <!--<span class="fa" :class="`fa-${key}`" />-->
          </a>
        </li>
      </ul>
    </div>

    <div class="contact">
      <h3>{{ $t('footer.contact.title') }}</h3>
      <dl>
        <dt>{{ $t('footer.contact.email.label') }}</dt>
        <dd>{{ $t('footer.contact.email.value') }}</dd>
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
