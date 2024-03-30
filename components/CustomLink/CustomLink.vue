<template>
  <NuxtLink :class="`custom-link ${route.fullPath===props.href && 'active'}`" :to="localePath(`${props.href}`)">
    {{ props.title }}
  </NuxtLink>
</template>
<style lang="scss">
@import './CustomLink';
</style>
<script setup lang="ts">
const props = defineProps({
  href: String,
  title: String
})
console.log('current name', route.fullPath)
</script>