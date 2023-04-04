<template>
  <div class="project block-half">
    <div>
      <h3>
        {{ project.name }} - {{ $t(`home.projects.types.${project.type}`) }}
      </h3>

      <h4>{{ projectDates }}</h4>

      <p v-html="project.short[$i18n.locale]" />

      <div>
        <a v-if="project.resource" target="_blank" :href="project.resource.url">{{
          $t(`home.projects.resources.${project.resource.type}`)
        }}</a>

        <a href="#modal" @click="openModal">{{ $t('home.projects.info') }}</a>
      </div>
    </div>

    <Modal v-model="showModal">
      <h3>{{ project.name }}</h3>

      <p v-html="project.short[$i18n.locale]" />

      <div class="attachment">
        <a
          class="clear-link"
          target="_blank"
          v-if="project.attachment.type === 'image'"
          :href="project.attachment.url"
        >
          <img
            :alt="$t('home.projects.attachment')"
            :src="project.attachment.url"
          />
        </a>

        <div v-if="project.attachment.type === 'youtube'">
          <iframe
            width="560"
            height="315"
            :src="project.attachment.url"
            frameborder="0"
            allow="encrypted-media; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>

      <div class="description" v-html="project.description[$i18n.locale]" />

      <div class="links">
        <a
          v-if="project.resource"
          target="_blank"
          :href="project.resource.url"
          >{{ $t(`home.projects.resources.${project.resource.type}`) }}</a
        >
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import datesMixin from '@/mixins/dates';

export default {
  name: 'Projects',
  mixins: [datesMixin],
  props: ['project'],
  components: { Modal },
  data() {
    return { showModal: false };
  },
  computed: {
    projectDates() {
      return this.prettifyDateRange(
        this.project.date,
        this.project.finishedDate
      );
    }
  },
  methods: {
    openModal(event) {
      event.preventDefault();
      this.showModal = true;
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/stylesheets/globals.scss';

$image-width: 150px;
$image-height: 150px;
$small-image-width: 100px;

.project {
  @extend %left-bordered;

  border-color: $light-gray;
  padding-left: $large-spacing;
  margin-bottom: $large-spacing;
}

.links {
  margin-top: $small-spacing;

  a {
    margin-right: $small-spacing;
  }
}

.attachment {
  margin-bottom: $medium-spacing;

  img,
  iframe {
    @extend %centered-block;
  }
}

.description {
  @extend %paragraph;
}
</style>
