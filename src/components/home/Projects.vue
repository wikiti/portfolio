<template>
  <div class="projects">
    <h2>{{ $t('home.projects.title') }}</h2>

    <div v-if="projects" class="project-list">
      <Project v-for="project in visibleProjects" :project="project" :key="project.id" />

      <a v-if="visibleProjects.length < projects.length" class="more" @click="showMore"
        >{{ $t('home.projects.more') }}</a>
    </div>

    <div v-else class="loading">
      {{ $t('home.projects.loading') }}
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
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
      this.projects = _(data).orderBy(['priority', 'desc']).reverse().value();
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
