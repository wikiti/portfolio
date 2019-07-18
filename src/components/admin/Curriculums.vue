<template>
  <div class="admin-curriculums">
    <h2>{{ $t('admin.curriculum.title') }}</h2>

    <div v-for="curriculum in curriculums" :key="curriculum.id">
      <fieldset class="file">
        <label>{{ $t(`languages.${curriculum.id}`) }}</label>
        <input type="text" readonly required v-model="curriculum.url"/>
        <input type="file" accept=".pdf"
                @change="uploadFile(curriculum, $event)"
                :disabled="curriculum.state == 'process'" />

        <span class="error" v-if="curriculum.state == 'error'">
          {{ $t('admin.curriculum.attachment_error') }}
        </span>
      </fieldset>
    </div>
  </div>
</template>

<script>
import uuid from 'uuid/v4';
import _ from 'lodash';

import firebase from '@/utils/firebase';
import remoteCurriculums from '@/resources/curriculums';

export default {
  name: 'Curriculums',
  data() {
    return {
      curriculums: this.$i18n.availableLocales.map((locale) => {
        return { id: locale, state: null, url: null };
      })
    };
  },
  mounted() {
    remoteCurriculums.get().then((data) => {
      _.each(this.curriculums, (curriculum) => {
        const remoteCurriculum = _.find(data, { id: curriculum.id });
        if (remoteCurriculum) {
          _.merge(curriculum, remoteCurriculum);
        }
      });
    });
  },
  methods: {
    uploadFile(curriculum, event) {
      const userFile = event.target.files[0];

      if (!userFile) {
        return;
      }

      curriculum.state = 'process';
      const uploadTask = firebase.storage().ref(`curriculums/${uuid()}`).put(userFile);
      const previousUrl = curriculum.url;

      uploadTask.then(snapshot => snapshot.ref.getDownloadURL())
        .then((url) => {
          curriculum.url = url;
          return remoteCurriculums.upsert(curriculum.id, { id: curriculum.id, url: url });
        })
        .then(() => {
          curriculum.state = 'ok';
        })
        .catch(() => {
          curriculum.state = 'error';
          curriculum.url = previousUrl;
        });
    }
  }
};
</script>
