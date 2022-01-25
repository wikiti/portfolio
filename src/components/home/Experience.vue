<template>
  <div class="experience">
    <h2>{{ $t('home.experience.title') }}</h2>

    <div v-if="experience" class="experience-list">
      <div v-for="item in experience" class="experience-item" :key="item.id">
        <h3 class="experience-name">{{ item.name }}</h3>
        <h4 class="experience-subtitle">
          <span class="experience-position">{{ item.position }}</span>
          <span class="experience-date">{{ dateRange(item) }}</span>
        </h4>

        <p class="experience-description">{{ item.description[$i18n.locale] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { orderBy } from 'lodash';
import { mapActions } from 'vuex';
import experience from '@/resources/experience';

export default {
  name: 'Experience',
  data() {
    return {
      experience: null
    };
  },
  mounted() {
    experience.get().then((data) => {
      this.experience = orderBy(data, 'startedAt', 'desc');
      this.moduleLoaded('experience');
    });
  },
  methods: {
    ...mapActions(['moduleLoaded']),
    dateRange(item) {
      return item.id; // TODO: Prettify startedAt and endedAt
    }
  }
};
</script>
