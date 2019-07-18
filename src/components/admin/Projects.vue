<template>
  <div class="admin-projects" v-if="projects">
    <h2>{{ $t('admin.projects.title') }}</h2>

    <div class="admin-project" v-for="project in sortedProjects" :key="project.id" >
      <form @submit.prevent="updateProject(project)">
        <fieldset>
          <fieldset class="properties">
            <input type="text" required v-model="project.id" disabled>
            <input type="text" required v-model="project.name"
                   :placeholder="$t('admin.projects.name')">

            <input type="number" min="0" v-model="project.priority"
                   :placeholder="$t('admin.projects.priority')">

            <select required v-model="project.type">
              <option disabled :value="null">{{ $t('admin.projects.select_type') }}</option>
              <option v-for="type in projectTypes" :key="type" :value="type">
                {{ $t(`home.projects.types.${type}`) }}
              </option>
            </select>
          </fieldset>

          <fieldset class="logo">
            <input type="text" readonly v-model="project.logo" required
                   :placeholder="$t('admin.projects.logo')" />
            <input type="file" accept=".png,.jpg,.jpeg,.gif,.webp"
                    @change="uploadLogoFile(project, $event)"
                    :disabled="project.logoState == 'process'" />

            <span class="error" v-if="project.logoState == 'error'">
              {{ $t('admin.projects.attachment_error') }}
            </span>
          </fieldset>

          <fieldset class="short-descriptions">
            <div v-for="locale in $i18n.availableLocales" :key="locale">
              <label>{{ $t(`languages.${locale}`) }}</label>
              <textarea required v-model="project.short[locale]"
                        :placeholder="$t('admin.projects.short')" />
            </div>
          </fieldset>

          <fieldset class="descriptions">
            <div v-for="locale in $i18n.availableLocales" :key="locale">
              <label>{{ $t(`languages.${locale}`) }}</label>
              <textarea required v-model="project.description[locale]"
                        :placeholder="$t('admin.projects.description')" />
            </div>
          </fieldset>

          <fieldset class="resource">
            <select required v-model="project.resource.type">
              <option disabled :value="null">
                {{ $t('admin.projects.select_resource_type') }}
              </option>
              <option v-for="type in projectResourceTypes" :key="type" :value="type">
                {{ $t(`home.projects.resources.${type}`) }}
              </option>
            </select>

            <input type="text" required v-model="project.resource.url"
                   :placeholder="$t('admin.projects.url')">
          </fieldset>

          <fieldset class="attachment">
            <select required v-model="project.attachment.type"
                    :disabled="project.attachment.state == 'process'">
              <option disabled :value="null">
                {{ $t('admin.projects.select_attachment_type') }}
              </option>
              <option v-for="type in projectAttachmentTypes" :key="type" :value="type">
                {{ $t(`home.projects.attachments.${type}`) }}
              </option>
            </select>

            <input type="text" required v-if="project.attachment.type == 'youtube'"
                   v-model="project.attachment.url" :placeholder="$t('admin.projects.url')"
                   :disabled="project.attachment.state == 'process'" />

            <template v-if="project.attachment.type == 'image'">
              <input type="text" readonly required v-if="project.attachment.url"
                     v-model="project.attachment.url" />
              <input type="file" accept=".png,.jpg,.jpeg,.gif"
                     @change="uploadFile(project, $event)"
                     :placeholder="$t('admin.projects.url')"
                     :disabled="project.attachment.state == 'process'" />

              <span class="error" v-if="project.attachment.state == 'error'">
                {{ $t('admin.projects.attachment_error') }}
              </span>
            </template>
          </fieldset>

          <div class="submit">
            <input type="submit" :value="$t('admin.projects.save')" />

            <ConfirmationButton @click="deleteProject(project)" class="danger">
              {{ $t('admin.projects.delete') }}
            </ConfirmationButton>

            <span class="submit-result" :class="project.result" v-if="project.result">
              {{ $t(`admin.projects.result.${project.result}`) }}
            </span>
          </div>
        </fieldset>
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

import firebase from '@/utils/firebase';
import remoteProjects from '@/resources/projects';
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
    remoteProjects.get().then((data) => {
      this.projects = data;
    });
  },
  computed: {
    sortedProjects() {
      return _.orderBy(this.projects, ['priority', 'desc']);
    }
  },
  methods: {
    addEmptyProject() {
      this.projects.push({
        attachment: { type: null, url: null },
        description: this.buildLocalesObject(),
        id: uuid(),
        logo: null,
        name: null,
        new: true,
        priority: null,
        resource: { type: null, url: null },
        short: this.buildLocalesObject(),
        type: null
      });
    },
    updateProject(project) {
      Vue.delete(project.attachment, 'state');
      Vue.delete(project.attachment, 'logoState');
      Vue.delete(project, 'new');
      Vue.delete(project, 'result');
      Vue.delete(project, 'result');

      remoteProjects.upsert(project.id, project)
        .then(() => Vue.set(project, 'result', 'ok'))
        .catch(() => Vue.set(project, 'result', 'error'));
    },
    deleteProject(project) {
      const { id } = project;

      remoteProjects.delete(id).then(() => {
        this.projects = _.reject(this.projects, { id });
      }).catch(() => Vue.set(project, 'result', 'error'));
    },
    uploadAttachmentFile(project, event) {
      const file = event.target.files[0];

      if (!file) {
        return;
      }

      const uploadTask = firebase.storage().ref(`attachments/${uuid()}`).put(file);

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
    uploadLogoFile(project, event) {
      const file = event.target.files[0];

      if (!file) {
        return;
      }

      const uploadTask = firebase.storage().ref(`logos/${uuid()}`).put(file);

      Vue.set(project, 'logoState', 'process');

      uploadTask.then(snapshot => snapshot.ref.getDownloadURL())
        .then((url) => {
          project.logo = url;
          project.logoState = 'ok';
        })
        .catch(() => {
          project.logoState = 'error';
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
