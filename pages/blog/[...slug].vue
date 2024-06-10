<template>
  <ContentRenderer :value="data ?? {}" class="prose mx-auto dark:prose-invert" />
  <div class="tags-wrapper">
    <!-- <template v-if="data?.tags?.length ?? [].length > 0">
      <Tag v-for="tag in data?.tags" :key="tag" :title="tag"/>
    </template> -->
  </div>
</template>

<script setup lang="ts">
interface ContentData {
  title?: string;
  description?: string;
  cover?: string;
  tags?: string[];
}

const { path } = useRoute()
const { data } = await useAsyncData<ContentData>(`${path}`, () =>
  queryContent().where({
    _path: path
  }).findOne())

const contentData = data as Ref<ContentData | null>

useHead({
  title: contentData.value?.title ? `${contentData.value.title} | Abdurrahman` : "Abdurrahman",
})
useSeoMeta({
  ogTitle: contentData.value?.title ? `${contentData.value.title} | Abdurrahman` : "Abdurrahman",
  description: contentData.value?.description ? contentData.value.description : "Abdurrahman\'s Personal website",
  ogDescription: contentData.value?.description ? contentData.value.description : "Abdurrahman\'s Personal website",
  ogImage: contentData.value?.cover ? `/images/blog/${contentData.value.cover}` : '/images/my-icon.png',
  twitterCard: 'summary_large_image',
})
</script>
