<template>
  <div class="projects">
    <h3>{{ $t("projects.title") }}</h3>

    <div v-if="projects" class="project-list">
      <Project v-for="project in visibleProjects" :project="project" :key="project.id" />

      <a v-if="projects.length != visibleProjects.length" class="more" @click="showMore">
        {{ $t("projects.more") }}
      </a>
    </div>
    <div v-else class="loading">
      {{ $t("projects.loading") }}
    </div>
  </div>
</template>

<script>
import projects from '@/resources/projects';
import Project from '@/components/home/Project.vue';

export default {
  name: 'Projects',
  components: { Project },
  data() {
    return {
      projects: null,
      visibleProjectCount: 4
    };
  },
  mounted() {
    projects.get().then((data) => {
      this.projects = data;
    });
  },
  computed: {
    visibleProjects() {
      return this.projects.slice(0, this.visibleProjectCount);
    }
  },
  methods: {
    showMore() {
      this.visibleProjectCount += 4;
    }
  }
};
</script>
