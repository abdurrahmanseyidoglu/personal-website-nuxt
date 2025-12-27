<template>
  <div class="navbar">
    <div class="navbar-links-wrapper">
      <CustomLink :href="`/`" :title="$t('home')" />
      <CustomLink :href="`/blog`" :title="$t('blog')" />
      <!-- <CustomLink :href="`/portfolio`" :title="$t('portfolio')" /> -->
    </div>
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.langName }}
    </NuxtLink>
    <div class="theme-toggle">
      <Icon
        name="ic:round-nights-stay"
        size="1.5rem"
        class="text-neutral-800 dark:text-slate-200"
        @click="handleThemeChange('dark')"
      />
      <Icon
        name="material-symbols:light-mode-outline-rounded"
        size="1.5rem"
        color="text-neutral-800 dark:text-slate-200"
        @click="handleThemeChange('light')"
      />
      <Icon
        name="material-symbols:monitor-outline"
        size="1.5rem"
        color="text-neutral-800 dark:text-slate-200"
        @click="handleThemeChange('system')"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
const handleThemeChange = (themeType: string) => {
  colorMode.preference = themeType
}
</script>

<style lang="scss">
@use './Navbar';
</style>
