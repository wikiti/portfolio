<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <span class="post-date">Posted on {{ date }}</span>

    <!-- TODO: Body -->
  </div>
</template>

<script>
import auth from '@/utils/auth';

export default {
  name: 'post',
  data() {
    return {
      title: '',
      subtitle: '',
      date: null
    };
  },
  methods: {
    checkForm(event) {
      event.preventDefault();
      this.sending = true;
      this.error = null;

      auth.login(this.email, this.password)
        .then(() => {
          this.$router.replace('/');
        })
        .catch((error) => {
          this.sending = false;
          this.error = error.message;
        });

      return false;
    }
  }
};
</script>
