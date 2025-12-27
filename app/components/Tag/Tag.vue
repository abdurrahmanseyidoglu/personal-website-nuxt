<template>
  <div class="tag">
    <p>{{ props.title }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>

<style lang="scss">
@use './Tag.scss';
</style>
