<template>
  <div class="navbar">
    <div class="navbar-links-wrapper">
      <CustomLink :href="`/`" :title="$t('home')" class="underline" />
      <CustomLink :href="`/blog`" :title="$t('blog')" />
      <!-- <CustomLink :href="`/portfolio`" :title="$t('portfolio')" /> -->
    </div>
    <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
      {{ locale.langName }}
    </NuxtLink>
    <div @click="handleThemeToggle" class="theme-toggle">
      <Icon v-show="!isDark" name="ic:round-nights-stay" size="1.5rem" class="text-neutral-800 dark:text-slate-200" />
      <Icon v-show="isDark" name="material-symbols:light-mode-outline-rounded" size="1.5rem" color="white" />
    </div>

  </div>
</template>
<style lang="scss">
@import './Navbar';
</style>
<script lang="ts" setup>

const isDark = ref(false)
onMounted(() => {

})
const handleThemeToggle = () => {
  if (typeof document !== 'undefined') {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark')
  }
}
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>