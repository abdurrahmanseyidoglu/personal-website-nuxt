<template>
  <NuxtLink
    :class="`custom-link ${route.fullPath === props.href && 'active'}`"
    :to="localePath(`${props.href}`)"
  >
    {{ props.title }}
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  href: string
  title: string
}>()
const route = useRoute()
const localePath = useLocalePath()
</script>

<style lang="scss">
@use './CustomLink';
</style>
