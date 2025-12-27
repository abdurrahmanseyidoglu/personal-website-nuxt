<template>
  <NuxtLink
    :class="`custom-link ${route.fullPath === props.href && 'active'}`"
    :to="localePath(`${props.href}`)"
  >
    {{ props.title }}
  </NuxtLink>
</template>
<style lang="scss">
@use './CustomLink';
</style>
<script setup lang="ts">
const props = defineProps<{
  href: string
  title: string
}>()
const route = useRoute()
const localePath = useLocalePath()
</script>
