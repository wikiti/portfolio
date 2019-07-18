<template>
  <div class="admin">
    <h1>{{ $t('admin.title') }}</h1>

    <Curriculums />
    <Projects />
    <Social />
  </div>
</template>

<script>
import Projects from '@/components/admin/Projects.vue';
import Curriculums from '@/components/admin/Curriculums.vue';
import Social from '@/components/admin/Social.vue';

export default {
  name: 'admin',
  components: { Projects, Curriculums, Social }
};
</script>
