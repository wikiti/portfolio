<template>
  <div class="contact">
    <h2>{{ $t('contact.title') }}</h2>
    <form @submit="checkForm">
      <input name="name" type="text" v-model="name" :class="{ errored: errors.name }"
             :placeholder="$t('contact.name')"
             @blur="validate('name')" @focus="clearValidation('name')" />

      <input name="contact" type="text" v-model="contact" :class="{ errored: errors.contact }"
             :placeholder="$t('contact.contact')"
             @blur="validate('contact')" @focus="clearValidation('contact')" />

      <textarea rows="3" name="message" v-model="message" :class="{ errored: errors.message }"
             :placeholder="$t('contact.message')"
             @blur="validate('message')" @focus="clearValidation('message')" />

      <input type="submit" :value="$t('contact.submit')" :disabled="!validForm" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      contact: '',
      message: '',
      errors: { name: null, contact: null, message: null }
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
      this.validate('name');
      this.validate('contact');
      this.validate('message');

      // TODO: Handle ajax submit
      if (!this.validForm()) {
        event.preventDefault();
        return false;
      }

      return true;
    },
    clearValidation(field) {
      this.errors[field] = null;
    },
    validate(field) {
      this.errors[field] = !this.isPresent(this[field]);
    },
    isPresent(field) {
      return field && field !== '' && field.replace(/\s+/g, '').length;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/stylesheets/globals.scss";

input[name=name], input[name=contact], textarea[name=message] {
  @extend .block;
  @extend %bordered;

  margin-bottom: $medium-spacing;
  padding: $no-spacing $no-spacing $small-spacing $medium-spacing;
  resize: none;

  border-top: none;
  border-right: none;
  outline: none;

  &::placeholder {
    color: $gray;
  }

  &.errored {
    border-color: $red;
    color: $red;

    &::placeholder {
      color: $pink;
    }
  }
}

.contact {
  margin-bottom: $large-spacing;
}
</style>
