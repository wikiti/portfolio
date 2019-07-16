<template>
  <div class="summary">
    <h2>{{ $t('home.summary.title') }}</h2>

    <div class="block">
      <p class="block-half">{{ $t('home.summary.left') }}</p>
      <p class="block-half">{{ $t("home.summary.right") }}</p>
    </div>

    <a class="button download" target="_blank" :href="downloadLink" v-if="downloadLink">
      {{ $t('home.summary.download') }}
    </a>
  </div>
</template>

<script>
import _ from 'lodash';

import remoteCurriculums from '@/resources/curriculums';

export default {
  name: 'Summary',
  data() {
    return { curriculums: [] };
  },
  mounted() {
    remoteCurriculums.get().then((data) => {
      this.curriculums = data;
    });
  },
  computed: {
    downloadLink() {
      const curriculum = _.find(this.curriculums, { id: this.$i18n.locale });
      return curriculum ? curriculum.url : null;
    }
  }
};
</script>
