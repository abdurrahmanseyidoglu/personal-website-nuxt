<template>
  <ContentRenderer :value="data ?? {}" class="prose mx-auto dark:prose-invert" />
  <div class="tags-wrapper">
    <!-- <template v-if="data?.tags?.length ?? [].length > 0">
      <Tag v-for="tag in data?.tags" :key="tag" :title="tag"/>
    </template> -->
  </div>
</template>

<script setup lang="ts">
const i18n = useI18n()
import type { ContentData } from '~/types/Interfaces'

const route = useRoute()

const { data } = await useAsyncData<ContentData>(`get-post`, () =>
  queryContent(`${route.path}`).findOne()
)

const contentData = data as Ref<ContentData | null>

useHead({
  title: contentData.value?.title
    ? `${contentData.value.title} | ${i18n.t('abdurrahman')}`
    : `${i18n.t('abdurrahman')}`
})
useSeoMeta({
  ogTitle: contentData.value?.title
    ? `${contentData.value.title} | ${i18n.t('abdurrahman')}`
    : `${i18n.t('abdurrahman')}`,
  description: contentData.value?.description
    ? contentData.value.description
    : "Abdurrahman's Personal website",
  ogDescription: contentData.value?.description
    ? contentData.value.description
    : "Abdurrahman's Personal website",
  ogImage: contentData.value?.cover
    ? `/images/blog/${contentData.value.cover}`
    : '/images/my-icon.png',
  twitterCard: 'summary_large_image'
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
