<template>
  <ContentRenderer :value="data ?? {}" class="prose mx-auto dark:prose-invert"/>
  <div class="tags-wrapper">
    <template v-if="data?.tags?.length > 0">
      <Tag v-for="tag in data?.tags" :key="tag" :title="tag"/>
    </template>
  </div>

</template>

<script setup lang="ts">
const {path} = useRoute()
const {data} = await useAsyncData(`${path}`, () =>
    queryContent().where({
      _path: path
    }).findOne())

useHead({
  title: data?.title ? `${data.title} | Abdurrahman` : "Abdurrahman",
})
// !TODO : Work on the SEO and fix the errors here
// !TODO : description and ogDescription are not working properly
// !TODO : fix ogImage and twitterCard
useSeoMeta({
  ogTitle: data?.title ? `${data.title} | Abdurrahman` : "Abdurrahman",
  description: data?.description ? data.description : "Abdurrahman\'s Personal website",
  ogDescription: data?.description ? data.description : "Abdurrahman\'s Personal website",
  ogImage: data?.cover ? data.cover : '/images/my-icon.png',
  twitterCard: data?.cover ? data.cover : '/images/my-icon.png',
})
</script>