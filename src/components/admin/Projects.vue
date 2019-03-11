<template>
  <div class="admin-projects" v-if="projects">
    <h2>{{ $t('admin.projects.title') }}</h2>

    <div class="admin-project" v-for="project in projects" :key="project.id" >
      <form @submit.prevent="updateProject(project)">
        <fieldset class="properties">
          <input type="text" required v-model="project.id" disabled>
          <input type="text" required v-model="project.name">

          <input type="number" min="0" required v-model="project.priority">

          <select required v-model="project.type">
            <option disabled value="">{{ $t('admin.projects.select_type') }}</option>
            <option v-for="type in projectTypes" :key="type" :value="type">
              {{ $t(`projects.types.${type}`) }}
            </option>
          </select>
        </fieldset>

        <!-- <fieldset class="logo">
          <input readonly v-model="project.logo" required />
          <input type="file" accept=".png,.jpg,.jpeg,.gif"
                  @change="uploadFile(project, $event)"
                  :disabled="project.logo_state == 'process'" />

          <span class="error" v-if="project.logo_state == 'error'">
            {{ $t('admin.projects.attachment_error') }}
          </span>
        </fieldset> -->

        <fieldset class="short-descriptions">
          <div v-for="locale in $i18n.availableLocales" :key="locale">
            <label>{{locale}}</label>
            <textarea required v-model="project.short[locale]" />
          </div>
        </fieldset>

        <fieldset class="descriptions">
          <div v-for="locale in $i18n.availableLocales" :key="locale">
            <label>{{locale}}</label>
            <textarea required v-model="project.description[locale]" />
          </div>
        </fieldset>

        <fieldset class="resource">
          <select required v-model="project.resource.type">
            <option disabled value="">{{ $t('admin.projects.select_resource_type') }}</option>
            <option v-for="type in projectResourceTypes" :key="type" :value="type">
              {{ $t(`projects.resources.${type}`) }}
            </option>
          </select>

          <input type="text" required v-model="project.resource.url">
        </fieldset>

        <fieldset class="attachment">
          <select required v-model="project.attachment.type"
                  :disabled="project.attachment.state == 'process'">
            <option disabled value="">{{ $t('admin.projects.select_attachment_type') }}</option>
            <option v-for="type in projectAttachmentTypes" :key="type" :value="type">
              {{ $t(`projects.attachments.${type}`) }}
            </option>
          </select>

          <input type="text" required v-if="project.attachment.type == 'youtube'"
                 v-model="project.attachment.url"
                 :disabled="project.attachment.state == 'process'" />

          <template v-if="project.attachment.type == 'image'">
            <input readonly v-model="project.attachment.url" required />
            <input type="file" accept=".png,.jpg,.jpeg,.gif"
                   @change="uploadFile(project, $event)"
                   :disabled="project.attachment.state == 'process'" />

            <span class="error" v-if="project.attachment.state == 'error'">
              {{ $t('admin.projects.attachment_error') }}
            </span>
          </template>
        </fieldset>

        <div class="submit">
          <span class="submit-result" :class="project.result" v-if="project.result">
            {{ $t(`admin.projects.result.${project.result}`) }}
          </span>

          <input type="submit" :value="$t('admin.projects.save')" />

          <ConfirmationButton @click="deleteProject(project)">
            {{ $t('admin.projects.delete') }}
          </ConfirmationButton>
        </div>
      </form>
    </div>

    <button @click="addEmptyProject">
      {{ $t('admin.projects.new') }}
    </button>
  </div>
</template>

<script>
import Vue from 'vue';
import uuid from 'uuid/v4';
import _ from 'lodash';

import firebase from '@/firebase';
import projects from '@/resources/projects';
import ConfirmationButton from './ConfirmationButton.vue';

export default {
  name: 'Projects',
  components: { ConfirmationButton },
  data() {
    return {
      projects: null,
      projectTypes: ['videogame_web', 'videogame_native', 'website', 'app_web', 'app_native'],
      projectResourceTypes: ['website', 'play_store', 'repository'],
      projectAttachmentTypes: ['youtube', 'image']
    };
  },
  mounted() {
    projects.get().then((data) => {
      this.projects = data;
      // TODO: Filter data
    });
  },
  methods: {
    addEmptyProject() {
      this.projects.push({
        attachment: { type: null, url: null },
        description: this.buildLocalesObject(),
        id: uuid(),
        name: null,
        new: true,
        priority: 0,
        resource: { type: null, url: null },
        short: this.buildLocalesObject(),
        type: null
      });
    },
    updateProject(project) {
      Vue.delete(project.attachment, 'state');
      Vue.delete(project, 'new');
      Vue.delete(project, 'result');

      projects.upsert(project.id, project)
        .then(() => Vue.set(project, 'result', 'ok'))
        .catch(() => Vue.set(project, 'result', 'error'));
    },
    deleteProject(project) {
      const { id } = project;

      projects.delete(id).then(() => {
        this.projects = _.reject(this.projects, { id });
      }).catch(() => Vue.set(project, 'result', 'error'));
    },
    uploadFile(project, event) {
      const file = event.target.files[0];

      if (!file) {
        return;
      }

      const uploadTask = firebase.storage().ref(uuid()).put(file);

      Vue.set(project.attachment, 'state', 'process');

      uploadTask.then(snapshot => snapshot.ref.getDownloadURL())
        .then((url) => {
          project.attachment.url = url;
          project.attachment.state = 'ok';
        })
        .catch(() => {
          project.attachment.state = 'error';
        });
    },
    buildLocalesObject() {
      return this.$i18n.availableLocales.reduce((object, locale) => {
        object[locale] = null;
        return object;
      }, {});
    }
  }
};
</script>
