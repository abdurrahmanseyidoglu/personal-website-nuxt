<template>
    <div class="employment-card">
        <div class="head">
            <p class="date">Nov 2021 - Present</p>
            <p class="title">Front-end developer, Imtilak Group</p>
            <p class="company-location">Istanbul-Yenikapi</p>
        </div>
        <p class="job-description">
            Imtilak group is an Extensive Turkish investment group, Headquarter Istanbul, with branches all
            over Turkey, I work on their websites and internal projects including CRM and CMS systems, my
            responsibilities includes:
        </p>
        <ul>
            <li>Developed and managed Server-side-render web applications using Nuxt.js</li>
            <li>
                Successfully constructed the Imtilak-Global website from the ground up.
            </li>
            <li>Proficiently crafted dynamic single-page applications using Vue.js with
                Server-side-rendering using the Inertia library.</li>
            <li>
                Designed captivating landing pages employing Blade, SCSS, and JavaScript |
                Examples:
                <CustomLink target="_blank" :title="`[1]`"
                    :href="`https://www.imtilak.net/en/landing/istanbul-city-center`"></CustomLink>,
                <CustomLink target="_blank" :title="`[2]`" :href="`https://www.imtilak.net/en/landing/trabzon-oversea`">
                </CustomLink>,
                <CustomLink target="_blank" :title="`[3]`"
                    :href="`https://www.imtilak.net/en/landing/new-large-investments`"></CustomLink>,
                <CustomLink target="_blank" :title="`[4]`" :href="`https://www.imtilak.net/en/landing/toskana-project`">
                </CustomLink>,
                <CustomLink target="_blank" :title="`[5]`"
                    :href="`https://www.imtilak.net/ar/landing/sapanca-lake-villas`"></CustomLink>,
                <CustomLink target="_blank" :title="`[6]`" :href="`https://www.imtilak.net/en/landing/riva-villas`">
                </CustomLink>,
                and many more...
            </li>
            <li>Exemplified expertise in webpage optimization, resulting in a substantial
                performance boost for a website.</li>
            <li>Led the development of the Oragon Website project.</li>
        </ul>
    </div>
</template>
<style lang="scss">
@import './EmploymentCard.scss';
</style>
<script lang="ts" setup>
const props = defineProps({
    date: String,
    jobTile: String,
    companyName: String,
    companyLocation: String,
    jobDescription: String,
})
</script>