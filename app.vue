<template>
  <div class=" bg-white dark:bg-zinc-800 min-h-screen  text-neutral-800 dark:text-slate-200">
    <div class="max-w-4xl mx-auto px-4">
      <Navbar/>
      <NuxtPage/>
    </div>
  </div>
</template>

<style lang="scss">
@import './assets/global_scss/global-styles';

</style>
<script setup lang="ts">
const isDark = ref(false)
</script>