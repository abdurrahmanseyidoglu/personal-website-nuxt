<template>
  <div class="blog-page">
    <p class="title">{{ `(${posts?.length} Posts) ` }}</p>
    <ul class="posts-wrapper">
      <li v-for="post in posts" :key="post.path">
        <MdCustomLink :title="post.title" :href="post.path" class="post-title" />
        <span class="date">{{ formatDate(post.date) }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const i18n = useI18n()

useHead({
  title: `${i18n.t('blog')} | ${i18n.t('abdurrahman')}`
})

// Use the appropriate collection based on locale
const collectionName = computed(() => i18n.locale.value === 'ar' ? 'blog_ar' : 'blog_en')

const { data: posts } = await useAsyncData('get-all-posts', async () => {
  const result = await queryCollection(collectionName.value)
    .order('date', 'DESC')
    .all()
  return result
}, { watch: [collectionName] })

const formatDate = (dateString: string): string => {
  if (dateString) {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  } else {
    return ''
  }
}
</script>

<style lang="scss">
@use './index.scss';
</style>
