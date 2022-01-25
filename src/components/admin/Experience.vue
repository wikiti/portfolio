<template>
  <div class="admin-experience">
    <h2>{{ $t('admin.experience.title') }}</h2>

    <div v-for="item in experience" :key="item.id">
      <form @submit.prevent="updateItem(item)">

        <fieldset class="experience" :disabled="item.state == 'upload'">
          <fieldset class="properties">
            <input type="text" disabled :value="item.id"/>
            <input type="text" required v-model="item.name"
                   :placeholder="$t('admin.experience.name')">
            <input type="text" required v-model="item.position"
                   :placeholder="$t('admin.experience.position')">
          </fieldset>

          <fieldset class="dates">
            <div class="block">
              <div class="block-half">
                <input type="date" required v-model="item.startedAt">
              </div>

              <div class="block-half">
                <input type="date" v-model="item.endedAt">
              </div>
            </div>
          </fieldset>

          <fieldset class="description">
            <div v-for="locale in $i18n.availableLocales" :key="locale">
              <label>{{ $t(`languages.${locale}`) }}</label>
              <textarea required v-model="item.description[locale]"
                        :placeholder="$t('admin.experience.description')" />
            </div>
          </fieldset>

          <span class="error" v-if="item.state == 'error'">
            {{ $t('admin.experience.error') }}
          </span>

          <input type="submit" :value="$t('admin.experience.save')"
                               :disabled="item.state == 'upload'"/>

          <ConfirmationButton class="danger" @click="deleteItem(item)"
                              :disabled="item.state == 'upload'">
            {{ $t('admin.experience.delete') }}
          </ConfirmationButton>
        </fieldset>
      </form>
    </div>

    <button @click="addEmptyItem">
      {{ $t('admin.experience.new') }}
    </button>
  </div>
</template>

<script>
import Vue from 'vue';
import uuid from 'uuid/v4';
import _ from 'lodash';

import remoteExperience from '@/resources/experience';
import ConfirmationButton from './ConfirmationButton.vue';

export default {
  name: 'Experience',
  components: { ConfirmationButton },
  data() {
    return { experience: [] };
  },
  mounted() {
    remoteExperience.get().then((data) => {
      this.experience = data || [];
    });
  },
  methods: {
    addEmptyItem() {
      this.experience.push({
        id: uuid(),
        state: null,
        name: null,
        position: null,
        startedAt: null,
        endedAt: null,
        description: this.buildLocalesObject()
      });
    },
    updateItem(item) {
      Vue.set(item, 'state', 'upload');

      remoteExperience.upsert(item.id, _.omit(item, ['state']))
        .then(() => {
          item.state = 'ok';
        })
        .catch(() => {
          item.state = 'error';
        });
    },
    buildLocalesObject() {
      return this.$i18n.availableLocales.reduce((object, locale) => {
        object[locale] = null;
        return object;
      }, {});
    },
    deleteItem(item) {
      const { id } = item;

      remoteExperience.delete(id).then(() => {
        this.experience = _.reject(this.experience, { id });
      }).catch(() => {
        Vue.set(item, 'state', 'error');
      });
    }
  }
};
</script>
