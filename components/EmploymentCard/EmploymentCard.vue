<template>
    <div class="employment-card">
        <div class="head">
            <p class="date">{{ props.date }}</p>
            <p class="title">{{ props.jobTile }}, {{ props.companyName }}</p>
            <p class="company-location">{{ props.companyLocation }}</p>
        </div>
        <p class="job-description">
            {{ props.jobDescription }}
        </p>
        <ul class="job-points">
            <li v-for="jobPoint in props.jobPoints" :key="jobPoint?.point_title">{{ jobPoint.point_title }}
                <template v-if="jobPoint.point_links.length > 0">
                    <a v-for="pointLink in jobPoint.point_links" target="_blank" class="external-link"
                        :key="pointLink.point_href" :title="pointLink.point_title" :href="pointLink.point_href">{{
                            pointLink.point_title }}</a>

                </template>
            </li>

        </ul>
    </div>
</template>
<style lang="scss">
@import './EmploymentCard.scss';
</style>
<script lang="ts" setup>
const props = defineProps<{

    date: string,
    jobTile: string,
    companyName: string,
    companyLocation: string,
    jobDescription?: string,
    jobPoints: JobPoint[],

}>()
interface JobPoint {
    point_title: string,
    point_links: PointLink[]
}
interface PointLink {
    point_title: string,
    point_href: string
}

</script>