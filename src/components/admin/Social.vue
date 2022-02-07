<template>
  <div>
    <h2>{{ $t('admin.social.title') }}</h2>

    <div v-for="socialLink in sortedSocialLinks" :key="socialLink.id">
      <form @submit.prevent="updateSocialLink(socialLink)">

        <fieldset :disabled="socialLink.state == 'upload'">
          <input type="text" disabled
                 :value="socialLink.id"/>
          <input type="text" required v-model="socialLink.url"
                 :placeholder="$t('admin.social.url')"
                 @input="markAsPending(socialLink)">
          <input type="text" required v-model="socialLink.icon"
                 :placeholder="$t('admin.social.icon')"
                 @input="markAsPending(socialLink)">
          <input type="number" min="0" v-model.number="socialLink.priority"
                 :placeholder="$t('admin.social.priority')"
                 @input="markAsPending(socialLink)">

          <span class="error" v-if="socialLink.state == 'error'">
            {{ $t('admin.social.error') }}
          </span>

          <input type="submit" :value="$t('admin.social.save')"
                               :disabled="socialLink.state == 'upload'"/>

          <ConfirmationButton class="danger" @click="deleteSocialLink(socialLink)"
                              :disabled="socialLink.state == 'upload'">
            {{ $t('admin.social.delete') }}
          </ConfirmationButton>
        </fieldset>
      </form>
    </div>

    <button @click="addEmptySocialLink">
      {{ $t('admin.social.new') }}
    </button>
  </div>
</template>

<script>
import Vue from 'vue';
import uuid from 'uuid/v4';
import _ from 'lodash';

import remoteSocial from '@/resources/social';
import ConfirmationButton from './ConfirmationButton.vue';

export default {
  name: 'Social',
  components: { ConfirmationButton },
  data() {
    return { socialLinks: [] };
  },
  mounted() {
    remoteSocial.get().then((data) => {
      this.socialLinks = data;
    });
  },
  computed: {
    sortedSocialLinks() {
      return _.orderBy(this.socialLinks, 'priority', 'desc');
    }
  },
  methods: {
    addEmptySocialLink() {
      this.socialLinks.push({
        id: uuid(),
        state: null,
        url: null,
        icon: null,
        priority: null
      });
    },
    updateSocialLink(socialLink) {
      Vue.set(socialLink, 'state', 'upload');

      remoteSocial.upsert(socialLink.id, _.omit(socialLink, ['state']))
        .then(() => {
          socialLink.state = 'ok';
        })
        .catch(() => {
          socialLink.state = 'error';
        });
    },
    deleteSocialLink(socialLink) {
      const { id } = socialLink;

      remoteSocial.delete(id).then(() => {
        this.socialLinks = _.reject(this.socialLinks, { id });
      }).catch(() => {
        Vue.set(socialLink, 'state', 'error');
      });
    },
    markAsPending(socialLink) {
      Vue.set(socialLink, 'state', 'pending');
    }
  }
};
</script>
