<template>
  <a class="custom-link" :href="props.href">
    {{ props.title }}
  </a>
</template>
<style lang="scss"></style>
<script setup lang="ts">
const props = defineProps({
  href: String,
  title: String
})
</script>
<style lang="scss">
@import '../../assets/global_scss/variables';

.custom-link {
  text-decoration: none;
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  color: inherit;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    border-radius: 2px;
    background-color: $blue;
    bottom: -3px;
    z-index: 1;
    transition: all ease-in-out 0.2s;
    inset-inline-start: 0;
  }

  &:hover:after {
    width: 100%;
  }
}
</style>
