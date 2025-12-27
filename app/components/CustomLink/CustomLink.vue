<template>
  <NuxtLink
    :class="['custom-link no-underline relative text-base font-semibold text-inherit w-fit', { 'active': route.fullPath === props.href }]"
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

<style scoped>
.custom-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  border-radius: 2px;
  background-color: #339af0;
  bottom: -3px;
  z-index: 1;
  transition: all ease-in-out 0.2s;
  inset-inline-start: 0;
}

.custom-link:hover::after,
.custom-link.active::after {
  width: 100%;
}
</style>
