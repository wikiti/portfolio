<template>
  <div class="project">
    <div class="project-logo">
      <img :src="logo" />
    </div>

    <div class="project-content">
      <h4>{{ project.name }}</h4>
      <div class="type">
        {{ $t(`projects.types.${project.type}`) }}
      </div>
      <div class="date">
        {{ $d(project.date, "short") | capitalize }}
      </div>
      <div class="short-description" v-html="project.short[$i18n.locale]" />

      <a v-if="project.resource" class="resource" target="_blank" :href="project.resource.url">
        {{ $t(`projects.resources.${project.resource.type}`) }}
      </a>
      <a class="more-info" @click="showModal = true">
        {{$t("projects.info")}}
      </a>
    </div>

    <Modal v-model="showModal" class="project-modal">
      TODO: Show detailed info
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  name: 'Projects',
  props: ['project'],
  components: { Modal },
  data() {
    return {
      showModal: false,
      logo: null
    };
  },
  mounted() {
    this.logo = `images/${this.project.id}.png`;
  },
  filters: {
    capitalize(value) {
      if (!value) {
        return '';
      }
      const string = value.toString();
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
};
</script>
