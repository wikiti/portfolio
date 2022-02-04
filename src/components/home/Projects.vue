<template>
  <div class="projects">
    <h2>{{ $t('home.projects.title') }}</h2>

    <div v-if="projects" class="project-list block">
      <Project v-for="project in visibleProjects" :project="project" :key="project.id" />

      <a v-if="visibleProjects.length < projects.length" class="more" @click="showMore"
        >{{ $t('home.projects.more') }}</a>
    </div>
  </div>
</template>

<script>
import { orderBy } from 'lodash';
import { mapActions } from 'vuex';
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
      console.log(data);
      this.projects = orderBy(data, 'priority', 'desc');
      this.moduleLoaded('projects');
    });
  },
  computed: {
    visibleProjects() {
      return this.projects.slice(0, this.visibleProjectCount);
    }
  },
  methods: {
    ...mapActions(['moduleLoaded']),
    showMore() {
      this.visibleProjectCount += 4;
    }
  }
};
</script>
