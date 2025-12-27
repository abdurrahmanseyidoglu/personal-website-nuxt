<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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
@use './assets/global_scss/global-styles';
</style>
