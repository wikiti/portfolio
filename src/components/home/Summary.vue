<template>
  <div class="summary">
    <h2>{{ $t('home.summary.title') }}</h2>

    <div class="block">
      <p class="block-half" v-for="(paragraph, index) in description" :key="index">
        {{paragraph}}
      </p>
    </div>

    <a class="button download" target="_blank" :href="downloadLink" v-if="downloadLink">
      {{ $t('home.summary.download') }}
    </a>
  </div>
</template>

<script>
import _ from 'lodash';

import remoteCurriculums from '@/resources/curriculums';
import remoteDescriptions from '@/resources/descriptions';

export default {
  name: 'Summary',
  data() {
    return {
      curriculums: [],
      descriptions: {}
    };
  },
  mounted() {
    remoteCurriculums.get().then((data) => {
      this.curriculums = data;
    });
    remoteDescriptions.get().then((data) => {
      this.descriptions = data;
    });
  },
  computed: {
    downloadLink() {
      const curriculum = _.find(this.curriculums, { id: this.$i18n.locale });
      return curriculum ? curriculum.url : null;
    },
    description() {
      if (this.descriptions[this.$i18n.locale]) {
        return _.split(this.descriptions[this.$i18n.locale], /\n+/);
      }

      return [];
    }
  }
};
</script>
