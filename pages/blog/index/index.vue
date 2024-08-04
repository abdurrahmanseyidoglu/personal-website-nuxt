<template>
    <div class="blog-page">
        <p class="title">{{ `(${posts?.length} Posts) ` }}</p>
        <ul class="posts-wrapper">
            <li v-for="post in posts">
                <MdCustomLink :title="post.title" :href="post._path" class="post-title" />
                <span class="date">{{ formatDate(post.date) }}</span>
            </li>
        </ul>
    </div>

</template>
<style lang="scss"></style>
<script setup lang="ts">
const i18n = useI18n()
useHead({
    title: `${i18n.t('blog')} | ${i18n.t('abdurrahman')}`,
})
const { data: posts } = await useAsyncData('get-all-posts', () => queryContent('/blog').sort({ date: -1 }).find())
const formatDate = (dateString: string): string => {
    if (dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    else {

        return ''
    }
}
</script>

<style lang="scss">
@import './index.scss';
</style>