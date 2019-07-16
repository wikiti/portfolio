<template>
  <div class="login">
    <h2>{{ $t('login.title') }}</h2>

    <form @submit="checkForm">
      <input name="email" type="email" v-model="email" :placeholder="$t('login.email')"
             :disabled="sending" />

      <input name="password" type="password" v-model="password" :placeholder="$t('login.password')"
             :disabled="sending" />

      <input type="submit" :value="$t('login.submit')" :disabled="sending" />
    </form>

    <div class="error" v-if="error">{{ error }}</div>

    <router-link to="/signup">{{ $t('login.signup') }}</router-link>
  </div>
</template>

<script>
import auth from '@/utils/auth';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      error: null,
      sending: false
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
