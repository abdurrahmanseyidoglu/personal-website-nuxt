<template>
  <div class="bg-white dark:bg-zinc-800 min-h-screen  text-neutral-800 dark:text-slate-200">
    <div class="max-w-5xl mx-auto px-4">
      <Navbar />
      <NuxtPage />
    </div>
  </div>
</template>

<style lang="scss">
@import './assets/global_scss/global-styles';
</style>
<script setup lang="ts">
const { locale } = useI18n();
watchEffect(() => {
  useHead({
    htmlAttrs: {
      lang: locale.value,
      dir: locale.value === 'ar' ? 'rtl' : 'ltr',
      class: 'dark'
    },
  });
});

</script>