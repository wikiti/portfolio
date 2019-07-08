<template>
  <div class="signup">
    <h2>{{ $t('signup.title') }}</h2>

    <form @submit="checkForm">
      <input name="email" type="email" v-model="email" :placeholder="$t('signup.email')"
             :disabled="sending" />

      <input name="password" type="password" v-model="password" :placeholder="$t('signup.password')"
             :disabled="sending" />

      <input type="submit" :value="$t('signup.submit')" :disabled="sending" />
    </form>

    <div class="error" v-if="error">{{ error }}</div>

    <router-link to="/signin">{{ $t('signup.signin') }}</router-link>
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
      sending: false,
      error: null
    };
  },
  methods: {
    checkForm(event) {
      event.preventDefault();
      this.sending = true;
      this.error = null;

      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log('sign up');
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
