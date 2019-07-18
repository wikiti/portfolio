<template>
  <div class="home">
    <Header />

    <hr>

    <div class="content">
      <Summary />
      <Projects />
      <Contact />
    </div>

    <hr>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/home/Header.vue';
import Summary from '@/components/home/Summary.vue';
import Projects from '@/components/home/Projects.vue';
import Contact from '@/components/home/Contact.vue';
import Footer from '@/components/home/Footer.vue';

export default {
  name: 'home',
  components: {
    Header, Summary, Projects, Contact, Footer
  }
};
</script>
