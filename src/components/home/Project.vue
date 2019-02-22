<template>
  <div class="project">
    <div class="project-logo">
      <a class="clear-link more-info" href="#modal" @click="openModal">
        <img :src="logo" :alt="$t('projects.logo')" />
      </a>
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

      <p class="short-description" v-html="project.short[$i18n.locale]" />

      <div class="links">
        <a v-if="project.resource" class="resource" target="_blank" :href="project.resource.url"
          >{{ $t(`projects.resources.${project.resource.type}`) }}</a>

        <a class="more-info" href="#modal" @click="openModal"
          >{{$t("projects.info")}}</a>
      </div>
    </div>

    <Modal v-model="showModal" class="project-modal">
      <h3>{{ project.name }}</h3>

      <p class="short-description" v-html="project.short[$i18n.locale]" />

      <div class="attachments">
        <div class="attachment" v-for="attachment in project.attachments"
             :key="attachment.resource">

          <a class="clear-link image" target="_blank" v-if="attachment.type === 'image'"
             :href="attachment.resource">
            <img :alt="$t('projects.logo')" :src="attachment.resource" />
          </a>

          <div class="youtube" v-if="attachment.type === 'youtube'">
            <iframe width="560" height="315" :src="attachment.resource"
                    frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen />
          </div>

          <!-- TODO: Other resource types -->
        </div>
      </div>

      <p class="description" v-html="project.description[$i18n.locale]" />

      <div class="links">
        <a v-if="project.resource" class="resource" target="_blank" :href="project.resource.url"
          >{{ $t(`projects.resources.${project.resource.type}`) }}</a>
      </div>
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
      const string = value.toString().toLowerCase().replace(/[^a-z0-9., -_]/, '');
      return string.replace(/^\w/, char => char.toUpperCase());
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/stylesheets/globals.scss";

$image-width: 150px;
$small-image-width: 100px;

.project {
  margin-bottom: $large-spacing;
}

.project-logo {
  display: inline-block;
  width: $image-width;

  img {
    width: 100%;
    filter: grayscale(100%);
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

  @include respond-to(small) {
    width: calc(100% - #{$small-image-width});
  }
}

.links {
  margin-top: $small-spacing;

  a {
    margin-right: $small-spacing;
  }
}

.type, .date {
  color: $gray;
  margin-bottom: $medium-spacing;
}

.date {
  float: right;
  margin-left: $small-spacing;
}

.attachment {
  margin-bottom: $medium-spacing;

  img, iframe {
    @extend %centered-block;
  }
}
</style>
