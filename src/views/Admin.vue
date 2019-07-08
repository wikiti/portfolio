<template>
  <div class="admin">
    <h1>{{ $t('admin.title') }}</h1>

    <Curriculums />
    <Projects />
    <!-- TODO: Social form -->
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
