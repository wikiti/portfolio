<template>
  <div class="admin-description">
    <h2>{{ $t('admin.descriptions.title') }}</h2>
    <form @submit.prevent="updateDescriptions">
      <fieldset class="descriptions" :disabled="state == 'upload'">
        <div v-for="locale in $i18n.availableLocales" :key="locale">
          <label>{{ $t(`languages.${locale}`) }}</label>
          <textarea required v-model="descriptions[locale]"
                    :placeholder="$t('admin.descriptions.title')" />
        </div>
      </fieldset>

      <span class="error" v-if="state == 'error'">
        {{ $t('admin.social.error') }}
      </span>

      <input type="submit" :value="$t('admin.descriptions.save')"
                           :disabled="state == 'upload'"/>
    </form>
  </div>
</template>

<script>
import _ from 'lodash';

import remoteDescriptions from '@/resources/descriptions';

export default {
  name: 'Descriptions',
  data() {
    return {
      descriptions: _.zipObject(this.$i18n.availableLocales),
      state: null
    };
  },
  mounted() {
    remoteDescriptions.get().then((data) => {
      this.descriptions = data;
    });
  },
  methods: {
    updateDescriptions() {
      this.state = 'upload';
      remoteDescriptions.upsert(this.descriptions)
        .then(() => {
          this.state = 'ok';
        })
        .catch(() => {
          this.state = 'error';
        });
    }
  }
};
</script>
