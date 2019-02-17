<template>
  <div class="summary">
    <h3>{{ $t("summary.title") }}</h3>
    <div class="summary-left">{{ $t("summary.left") }}</div>
    <div class="summary-right">{{ $t("summary.right") }}</div>
    <a class="download">{{ $t("summary.download") }}</a>
  </div>
</template>

<script>
export default {
  name: 'Summary'
};
</script>
