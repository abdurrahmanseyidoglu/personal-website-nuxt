<template>
  <div class=" bg-white dark:bg-gray-900 min-h-screen">
    <div class="container">
      <Navbar/>
      <NuxtPage/>
    </div>
  </div>
</template>

<style lang="scss">
@import './assets/global_scss/global-styles';

</style>
<script setup>
const isDark = ref(false)

</script>