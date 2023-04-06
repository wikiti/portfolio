<template>
  <div>
    <h2>{{ $t('home.experience.title') }}</h2>

    <div v-if="experience">
      <div v-for="item in experience" :key="item.id">
        <h3>{{ $t('home.experience.position', item) }}</h3>

        <div class="experience-details">
          <h4>{{ prettifyDateRange(item.startedAt, item.endedAt) }}</h4>
          <p>{{ item.description[$i18n.locale] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { orderBy } from 'lodash';
import { mapActions } from 'vuex';
import experience from '@/resources/experience';
import datesMixin from '@/mixins/dates';

export default {
  name: 'Experience',
  mixins: [datesMixin],
  data() {
    return {
      experience: []
    };
  },
  mounted() {
    experience.get().then((data) => {
      this.experience = orderBy(data, 'startedAt', 'desc');
      this.moduleLoaded('experience');
    });
  },
  methods: {
    ...mapActions(['moduleLoaded'])
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/stylesheets/globals.scss';

.experience-details {
  @extend %left-bordered;

  border-color: $light-gray;
  padding-left: $medium-spacing;
}
</style>
