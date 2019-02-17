<template>
  <div v-if="value" class="modal-container">
    <div class="modal">
      <div class="close" @click="closeModal">&times;</div>

      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    value: Boolean
  },
  methods: {
    closeModal() {
      this.$emit('input', false);
    }
  }
};
</script>
