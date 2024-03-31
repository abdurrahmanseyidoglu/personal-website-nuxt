<template>
  <div class="navbar">
    <div class="navbar-links-wrapper text-neutral-800 dark:text-slate-200">
      <CustomLink :href="`/`" :title="$t('home')" class="underline"/>
      <CustomLink :href="`/blog`" :title="$t('blog')"/>
      <CustomLink :href="`/portfolio`" :title="$t('portfolio')"/>
    </div>

    <div @click="handleThemeToggle" class="theme-toggle">
      <Icon v-if="!isDark" name="ic:round-nights-stay" size="1.5rem" class="text-neutral-800 dark:text-slate-200"/>
      <Icon v-else name="material-symbols:light-mode-outline-rounded" size="1.5rem" color="white"/>
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
</script>