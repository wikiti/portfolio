<template>
  <div class="summary">
    <h2>{{ $t("summary.title") }}</h2>

    <div class="block">
      <p class="block-half">{{ $t("summary.left") }}</p>
      <p class="block-half">{{ $t("summary.right") }}</p>
    </div>

    <a class="download" :href="downloadLink">{{ $t("summary.download") }}</a>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  computed: {
    downloadLink() {
      return `cv_${this.$i18n.locale}.pdf`;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/stylesheets/globals.scss";

.download {
  @extend %button;
}
</style>
