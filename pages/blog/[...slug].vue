<template>
  <ContentRenderer :value="data" class="prose dark:prose-invert"/>
  <template v-if="data?.tags?.length>0">
    <p v-for="tag in data?.tags" :key="tag">
      {{ tag }}
    </p>
  </template>
</template>

<script setup lang="ts">
const {path} = useRoute()
const {data} = await useAsyncData(`${path}`, () =>
    queryContent().where({
      _path: path
    }).findOne())
</script>