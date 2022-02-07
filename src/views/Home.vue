<template>
  <Loading :loading="!allModulesLoaded">
    <div>
      <Header />

      <hr>

      <div>
        <Summary />
        <Experience />
        <Projects />
        <Contact />
      </div>

      <hr>

      <Footer />
    </div>
  </Loading>
</template>

<script>
import { mapGetters } from 'vuex';

import Header from '@/components/home/Header.vue';
import Summary from '@/components/home/Summary.vue';
import Experience from '@/components/home/Experience.vue';
import Projects from '@/components/home/Projects.vue';
import Contact from '@/components/home/Contact.vue';
import Footer from '@/components/home/Footer.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'home',
  components: {
    Experience, Header, Summary, Projects, Contact, Footer, Loading
  },
  computed: {
    ...mapGetters(['allModulesLoaded'])
  }
};
</script>
