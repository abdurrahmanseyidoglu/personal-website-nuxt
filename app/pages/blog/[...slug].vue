<template>
  <ContentRenderer
    v-if="data"
    :value="data"
    class="prose mx-auto dark:prose-invert"
  />
  <!-- <div class="tags-wrapper"> -->
  <!-- <template v-if="data?.tags?.length ?? [].length > 0">
      <Tag v-for="tag in data?.tags" :key="tag" :title="tag"/>
    </template> -->
  <!-- </div> -->
</template>

<script setup lang="ts">
const i18n = useI18n()
const route = useRoute()

// Determine which collection to use based on locale
const collectionName = computed(() => i18n.locale.value === 'ar' ? 'blog_ar' : 'blog_en')

// Build the content path - extract slug from route and prepend locale/blog
const contentPath = computed(() => {
  const slugParts = route.params.slug as string[]
  return `/${i18n.locale.value}/blog/${slugParts.join('/')}`
})

const { data } = await useAsyncData(`get-post-${route.path}`, async () => {
  return await queryCollection(collectionName.value)
    .path(contentPath.value)
    .first()
}, { watch: [collectionName, contentPath] })

useHead({
  title: data.value?.title
    ? `${data.value.title} | ${i18n.t('abdurrahman')}`
    : `${i18n.t('abdurrahman')}`,
})
useSeoMeta({
  ogTitle: data.value?.title
    ? `${data.value.title} | ${i18n.t('abdurrahman')}`
    : `${i18n.t('abdurrahman')}`,
  description: data.value?.description
    ? data.value.description
    : 'Abdurrahman\'s Personal website',
  ogDescription: data.value?.description
    ? data.value.description
    : 'Abdurrahman\'s Personal website',
  ogImage: data.value?.cover
    ? `/images/blog/${data.value.cover}`
    : '/images/my-icon.png',
  twitterCard: 'summary_large_image',
})
</script>

<style lang="scss">
// keep code direction left to right in Arabic
pre {
  direction: ltr !important;
}

code {
  background-color: var(--tw-prose-pre-bg);
  padding: 0.5rem;
  border-radius: 5px !important;
  color: white !important;
}
th,
tr {
  word-break: keep-all;
}
</style>
