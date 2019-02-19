<template>
  <div class="summary">
    <h2>{{ $t("summary.title") }}</h2>
    <p class="summary-left">{{ $t("summary.left") }}</p>
    <p class="summary-right">{{ $t("summary.right") }}</p>
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
@import "@/assets/stylesheets/measures.scss";

p.summary-left, p.summary-right {
  display: inline-block;
  box-sizing: border-box;
  width: 50%;
}

p.summary-left {
  padding-right: $medium-spacing;
}

p.summary-right {
  padding-left: $medium-spacing;
}
</style>
