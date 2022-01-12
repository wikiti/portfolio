<template>
  <div class="admin">
    <h1>{{ $t('admin.title') }}</h1>

    <Descriptions />
    <Curriculums />
    <Projects />
    <Social />
  </div>
</template>

<script>
import Descriptions from '@/components/admin/Descriptions.vue';
import Projects from '@/components/admin/Projects.vue';
import Curriculums from '@/components/admin/Curriculums.vue';
import Social from '@/components/admin/Social.vue';

export default {
  name: 'admin',
  components: {
    Descriptions,
    Projects,
    Curriculums,
    Social
  }
};
</script>
