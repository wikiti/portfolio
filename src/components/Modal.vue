<template>
  <div v-if="value" role="dialog" tabindex="-1" class="modal-container" @click="dismissModal">
    <div class="modal">
      <div class="close" @click="closeModal" aria-label="Close dialog">&times;</div>

      <div class="modal-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    value: Boolean
  },
  created() {
    window.addEventListener('keyup', this.keyEvent);
  },
  methods: {
    closeModal() {
      this.$emit('input', false);
    },
    dismissModal(event) {
      if (event.target.classList.contains('modal-container')) {
        this.closeModal();
      }
    },
    keyEvent(event) {
      if (event.key === 'Escape') {
        this.closeModal();
      }
    }
  },
  watch: {
    value() {
      const delta = this.value ? 1 : -1;
      const count = parseInt(window.document.body.dataset.modalCount, 10);
      window.document.body.dataset.modalCount = count + delta;
    }
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.keyEvent);
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/stylesheets/globals.scss";

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: $transparent-black;
  overflow-y: auto;
}

.modal {
  @extend %right-aligned;

  width: 80%;
  max-width: $max-width * 0.75;
  box-sizing: border-box;

  margin: $huge-spacing auto;
  padding: $large-spacing;
  background-color: $white;

  .close {
    @include font-scale(2);

    display: inline-block;
    cursor: pointer;
  }

  .modal-content {
    display: block;
    margin-top: $medium-spacing;
    text-align: initial;
  }
}
</style>
