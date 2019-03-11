<template>
  <div class="projects">
    <h2>{{ $t("projects.title") }}</h2>

    <div v-if="projects" class="project-list">
      <Project v-for="project in visibleProjects" :project="project" :key="project.id" />

      <a v-if="visibleProjects.length < projects.length" class="more" @click="showMore"
        >{{ $t("projects.more") }}</a>
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
      visibleProjectCount: 3
    };
  },
  mounted() {
    projects.get().then((data) => {
      this.projects = data.sort((a, b) => (b.priority || 0) - (a.priority || 0));
    });
  },
  computed: {
    visibleProjects() {
      return this.projects.slice(0, this.visibleProjectCount);
    }
  },
  methods: {
    showMore() {
      this.visibleProjectCount += 3;
    }
  }
};
</script>
