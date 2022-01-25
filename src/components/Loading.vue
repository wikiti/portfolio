<template>
  <div class="loading-wrapper">
    <transition name="fade">
      <div class="loading" v-if="loading">
        <div class="loading-ring" />
      </div>
    </transition>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loading: Boolean
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/stylesheets/globals.scss";

.loading-wrapper {
  position: relative;
}

.loading {
  display: flex;
  justify-content: center;
  padding-top: $huge-spacing;
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: $white;
  opacity: 0.95;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
