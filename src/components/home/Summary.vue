<template>
  <div class="summary">
    <h3>{{ $t("summary.title") }}</h3>
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
