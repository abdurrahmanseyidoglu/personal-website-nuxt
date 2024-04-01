<template>
  <ContentRenderer :value="data" class="prose dark:prose-invert" />
  <div class="tags-wrapper">
    <template v-if="data?.tags?.length > 0">
      <Tag v-for="tag in data?.tags" :key="tag" :title="tag" />
    </template>
  </div>

</template>

<script setup lang="ts">
const { path } = useRoute()
const { data } = await useAsyncData(`${path}`, () =>
  queryContent().where({
    _path: path
  }).findOne())
</script>
<style lang="scss">
.tags-wrapper {
  display: flex;
  align-items: center;
  justify-content: felx-start;
  gap: .5rem;
  margin-block: 1rem;
}
</style>