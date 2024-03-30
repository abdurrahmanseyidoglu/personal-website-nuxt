<template>
  <div class="navbar">
    <div class="navbar-links-wrapper">
      <CustomLink :href="`/`" :title="$t('home')"/>
      <CustomLink :href="`/blog`" :title="$t('blog')"/>
      <CustomLink :href="`/portfolio`" :title="$t('portfolio')"/>
    </div>

    <div @click="handleThemeToggle" class="theme-toggle">
      <Icon v-if="!isDark" name="ic:round-nights-stay" size="1.5rem"/>
      <Icon v-else name="material-symbols:light-mode-outline-rounded" size="1.5rem"/>
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