<template>
  <div class="tag">
    <p>#{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>

<style lang="scss">
@import './Tag.scss';
</style>
