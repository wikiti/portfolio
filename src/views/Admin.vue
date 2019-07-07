<template>
  <div class="admin">
    <!-- Header -->

    <Curriculums />
    <Projects />

    <!-- Social form -->
  </div>
</template>

<script>
import Projects from '@/components/admin/Projects.vue';
import Curriculums from '@/components/admin/Curriculums.vue';

export default {
  name: 'admin',
  components: { Projects, Curriculums }
};
</script>
