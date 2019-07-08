<template>
  <div class="contact">
    <h2>{{ $t('contact.title') }}</h2>
    <form @submit="checkForm">
      <input name="name" type="text" v-model="name" :class="{ error: errors.name }"
             :placeholder="$t('contact.name')" :disabled="sending"
             @blur="validate('name')" @focus="clearValidation('name')" />

      <input name="contact" type="text" v-model="contact" :class="{ error: errors.contact }"
             :placeholder="$t('contact.contact')" :disabled="sending"
             @blur="validate('contact')" @focus="clearValidation('contact')" />

      <textarea rows="3" name="message" v-model="message" :class="{ error: errors.message }"
             :placeholder="$t('contact.message')" :disabled="sending"
             @blur="validate('message')" @focus="clearValidation('message')" />

      <input type="submit" :value="$t('contact.submit')" :disabled="sending || !validForm" />
    </form>

    <Modal v-model="modal.show" class="contact-modal">
      <p class="error" v-if="modal.error">{{ $t('contact.error') }}</p>
      <p v-else>{{ $t('contact.success') }}</p>
    </Modal>
  </div>
</template>

<script>
import firebase from 'firebase';
import Modal from '@/components/Modal.vue';

export default {
  name: 'Contact',
  components: { Modal },
  data() {
    return {
      name: '',
      contact: '',
      message: '',
      errors: { name: null, contact: null, message: null },
      sending: false,
      modal: {
        show: false,
        error: false
      }
    };
  },
  computed: {
    validForm() {
      return this.isPresent(this.name) && this.isPresent(this.contact)
        && this.isPresent(this.message);
    }
  },
  methods: {
    checkForm(event) {
      event.preventDefault();

      this.validate('name');
      this.validate('contact');
      this.validate('message');

      if (this.validForm) {
        this.submitForm();
      }

      return false;
    },
    clearValidation(field) {
      this.errors[field] = null;
    },
    validate(field) {
      this.errors[field] = !this.isPresent(this[field]);
    },
    isPresent(field) {
      return field && field !== '' && field.replace(/\s+/g, '').length;
    },
    submitForm() {
      this.sending = true;
      this.modal.show = false;
      this.modal.error = false;

      const contactForm = firebase.functions().httpsCallable('contactForm');
      contactForm({ name: this.name, contact: this.contact, message: this.message })
        .catch(() => {
          this.modal.error = true;
        })
        .finally(() => {
          this.modal.show = true;
          this.sending = false;
        });
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/stylesheets/globals.scss";

.contact {
  margin-bottom: $large-spacing;
}
</style>
