<template>
  <div class="contact">
    <h2>{{ $t('contact.title') }}</h2>
    <form>
      <input name="name" type="text" :placeholder="$t('contact.name')" />
      <input name="contact" type="text" :placeholder="$t('contact.contact')" />
      <textarea name="message" :placeholder="$t('contact.message')" />

      <input type="submit" :value="$t('contact.submit')" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact'
};
</script>
