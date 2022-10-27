<template>
  <div>
    <h2>{{ $t('admin.redirects.title') }}</h2>

    <div v-for="redirect in redirects" :key="redirect.id">
      <form v-if="redirect.dirty" @submit.prevent="createRedirect(redirect)">

        <fieldset :disabled="redirect.state == 'upload'">
          <input type="text" required v-model="redirect.key"
                 :placeholder="$t('admin.redirects.key')"
                 :disabled="redirect.state == 'upload'">
          <input type="text" required v-model="redirect.url"
                 :placeholder="$t('admin.redirects.url')"
                 :disabled="redirect.state == 'upload'">

          <span class="error" v-if="redirect.state == 'error'">
            {{ $t('admin.redirects.error') }}
          </span>

          <input v-if="redirect.dirty" type="submit"
                 :value="$t('admin.redirects.save')"
                 :disabled="redirect.state == 'upload'"/>
        </fieldset>
      </form>

      <div v-else>
        <fieldset>
          <div class="block-half">
            <input type="text" disabled :value="redirect.key" />
          </div>
          <div class="block-half">
            <input type="text" disabled :value="redirect.url" />
          </div>

          <input type="text" disabled :value="buildUrl(redirect)" />

          <ConfirmationButton class="danger" @click="deleteRedirect(redirect)"
                              :disabled="redirect.state == 'upload'">
            {{ $t('admin.redirects.delete') }}
          </ConfirmationButton>
        </fieldset>
      </div>
    </div>

    <button @click="addEmptyRedirect">
      {{ $t('admin.redirects.new') }}
    </button>
  </div>
</template>

<script>
import Vue from 'vue';
import _ from 'lodash';
import uuid from 'uuid/v4';

import remoteRedirect from '@/resources/redirects';
import ConfirmationButton from './ConfirmationButton.vue';

export default {
  name: 'Redirect',
  components: { ConfirmationButton },
  data() {
    return { redirects: [] };
  },
  mounted() {
    remoteRedirect.get().then((data) => {
      this.redirects = data;
      this.redirects.forEach(redirect => Vue.set(redirect, 'uuid', uuid()));
    });
  },
  methods: {
    buildUrl(redirect) {
      return `${process.env.VUE_APP_HOST}/r/${redirect.key}`;
    },
    addEmptyRedirect() {
      this.redirects.push({
        id: uuid(),
        key: null,
        url: null,
        state: 'new',
        dirty: true
      });
    },
    createRedirect(redirect) {
      Vue.set(redirect, 'state', 'upload');

      remoteRedirect.upsert(redirect.key, _.omit(redirect, ['state']))
        .then(() => {
          redirect.state = 'ok';
          redirect.dirty = false;
        })
        .catch(() => {
          redirect.state = 'error';
        });
    },
    deleteRedirect(redirect) {
      const { key } = redirect;

      remoteRedirect.delete(key).then(() => {
        this.redirects = _.reject(this.redirects, { key });
      }).catch(() => {
        Vue.set(redirect, 'state', 'error');
      });
    }
  }
};
</script>
