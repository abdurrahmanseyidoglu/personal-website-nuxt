<template>
  <div class="w-full">
    <div class="flex-col items-start flex md:flex-row md:items-center md:justify-between mb-4 p-2 rounded-lg bg-[#6890bf9e]">
      <p class="text-sm order-2 md:order-1">
        {{ props.date }}
      </p>
      <p class="text-lg md:text-xl font-medium order-1 md:order-1">
        {{ props.jobTile }}, {{ props.companyName }}
      </p>
      <p class="text-sm order-3 md:order-1">
        {{ props.companyLocation }}
      </p>
    </div>
    <p>
      {{ props.jobDescription }}
    </p>
    <ul
      class="list-inside list-square"
    >
      <li
        v-for="jobPoint in props.jobPoints"
        :key="jobPoint?.point_title"
        class="mb-2 list-disc"
      >
        {{ jobPoint.point_title }}
        <template v-if="jobPoint.point_links.length > 0">
          <a
            v-for="pointLink in jobPoint.point_links"
            :key="pointLink.point_href"
            target="_blank"
            class="external-link me-1"
            :title="pointLink.point_title"
            :href="pointLink.point_href"
          >{{ pointLink.point_title }}</a>
        </template>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { JobPoint } from '@@/types/Interfaces'

const props = defineProps<{
  date: string
  jobTile: string
  companyName: string
  companyLocation: string
  jobDescription?: string
  jobPoints: JobPoint[]
}>()
</script>

<style scoped>
.external-link {
  text-decoration: none;
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  color: inherit;
  width: fit-content;
  margin-inline-start: 0.3rem;
  display: inline-block;
}

.external-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  border-radius: 2px;
  background-color: #339af0;
  bottom: -3px;
  z-index: 1;
  transition: all ease-in-out 0.2s;
  inset-inline-start: 0;
}

.external-link:hover::after {
  width: 100%;
}
</style>
