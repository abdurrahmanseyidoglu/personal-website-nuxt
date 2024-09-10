<template>
  <div class="bg-white dark:bg-zinc-800 min-h-screen text-neutral-800 dark:text-slate-200">
    <div class="max-w-5xl mx-auto px-4 min-h-screen">
      <Navbar />
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale.value,
    dir: locale.value === 'ar' ? 'rtl' : 'ltr',
    
  }
})


// Watch for language changes
watch(locale, () => {
  useHead({
    htmlAttrs: {
      lang: locale.value,
      dir: locale.value === 'ar' ? 'rtl' : 'ltr'
    }
  })
})
</script>

<style lang="scss">
@import './assets/global_scss/global-styles';
</style>
