<template>
  <button type="button" @click="press" @mouseout="mouseOut">
    <slot v-if="!first" />
    <template v-else>
      {{ $t('admin.confirm') }}
    </template>
  </button>
</template>

<script>
export default {
  name: 'ConfirmationButton',
  data() {
    return { first: false };
  },
  methods: {
    press() {
      if (!this.first) {
        this.first = true;
        return;
      }

      this.first = false;
      this.$emit('click');
    },
    mouseOut() {
      this.first = false;
    }
  }
};
</script>
