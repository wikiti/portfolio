<template>
  <div class="signin">
    <h2>{{ $t('signin.title') }}</h2>

    <form @submit="checkForm">
      <input name="email" type="email" v-model="email" :placeholder="$t('signin.email')"
             :disabled="sending" />

      <input name="password" type="password" v-model="password" :placeholder="$t('signin.password')"
             :disabled="sending" />

      <input type="submit" :value="$t('signin.submit')" :disabled="sending" />
    </form>

    <div class="error" v-if="error">{{ error }}</div>

    <router-link to="/signup">{{ $t('signin.signup') }}</router-link>
  </div>
</template>

<script>
import firebase from '@/utils/firebase';

export default {
  name: 'signup',
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

      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log('logged in');
          // TODO: Redirect to admin
        })
        .catch((error) => {
          this.sending = false;
          this.error = error.message;
          console.error(error);
        });

      return false;
    }
  }
};
</script>
