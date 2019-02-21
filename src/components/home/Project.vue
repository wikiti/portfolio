<template>
  <div class="project">
    <div class="project-logo">
      <img :src="logo" alt="logo" />
    </div>

    <div class="project-content">
      <div class="project-header">
        <h3>{{ project.name }}</h3>
        <div class="date">
          {{ $d(project.date, "short") | capitalize }}
        </div>
        <div class="type">
          {{ $t(`projects.types.${project.type}`) }}
        </div>
      </div>

      <div class="short-description" v-html="project.short[$i18n.locale]" />

      <div class="links">
        <a v-if="project.resource" class="resource" target="_blank" :href="project.resource.url"
          >{{ $t(`projects.resources.${project.resource.type}`) }}</a>

        <a class="more-info" href="#modal" @click="openModal"
          >{{$t("projects.info")}}</a>
      </div>
    </div>

    <Modal v-model="showModal" class="project-modal">
      <h3>{{ project.name }}</h3>
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
    // this.logo = `images/${this.project.id}.png`;
    this.logo = 'https://loremflickr.com/400/400';
  },
  methods: {
    openModal(event) {
      event.preventDefault();
      this.showModal = true;
    }
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

<style scoped lang="scss">
@import "@/assets/stylesheets/globals.scss";

$image-width: 150px;
$small-image-width: 100px;

.project-logo {
  display: inline-block;
  width: $image-width;

  img {
    @extend %animated;

    width: 100%;
    filter: grayscale(100%);

    &:hover {
      filter: none;
    }
  }

  @include respond-to(small) {
    width: $small-image-width;
  }
}

.project-content {
  display: inline-block;
  width: calc(100% - #{$image-width});

  box-sizing: border-box;
  padding-left: $large-spacing;

  .short-description {
    margin: $medium-spacing $no-spacing;
  }

  @include respond-to(small) {
    width: calc(100% - #{$small-image-width});
  }

  .links {
    margin-top: $small-spacing;

    a {
      margin-right: $small-spacing;
    }
  }
}

.type, .date {
  color: $gray;
}

.date {
  float: right;
  margin-left: $small-spacing;
}
</style>
