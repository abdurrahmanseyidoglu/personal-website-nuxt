<template>
  <div>
    <div>
      <NuxtImg
        class="w-[102px]"
        src="/images/my-icon.png"
        alt="personal picture of the website owner pixilated"
        width="102"
        height="102"
      />
      <p class="text-5xl font-semibold mt-4">
        {{ $t('hi') }}
      </p>
      <p class="my-4">
        {{ $t('summery') }}
      </p>
      <hr class="my-4 w-full h-px border-t border-solid">
      <!-- PROFESSIONAL EXPERIENCE -->
      <div>
        <p class="text-2xl font-medium mb-4 mt-8">
          {{ $t('experience') }}
        </p>
        <div class="flex items-center justify-center flex-col">
          <EmploymentCard
            :date="`${$t('january')} 2025 - ${$t('present')}`"
            :job-tile="$t('frontEnd')"
            :company-name="$t('arsipaGmbh')"
            :company-location="`${$t('berlin')} / ${$t('germany')}`"
            :job-points="ArsipaJobPoints"
          />
          <hr class="my-4 w-[60%] h-px border-t border-dashed ms-0">
          <EmploymentCard
            :date="`${$t('november')} 2021 - ${$t('december')} 2024`"
            :job-tile="$t('frontEnd')"
            :company-name="$t('imtilakGroup')"
            :company-location="`${$t('istanbul')} / ${$t('turkey')}`"
            :job-points="ImtilakJobPoints"
          />
          <hr class="my-4 w-[60%] h-px border-t border-dashed ms-0">
          <EmploymentCard
            :date="`${$t('may')} 2020 - ${$t('september')} 2021`"
            :job-tile="$t('frontEnd')"
            :company-name="$t('inceGroup')"
            :company-location="`${$t('istanbul')} / ${$t('turkey')}`"
            :job-points="InceJobPoints"
          />
        </div>
      </div>

      <hr class="my-4 w-full h-px border-t border-solid">
      <!-- Skills Section -->
      <div>
        <p class="mb-4 font-medium text-2xl mt-8">
          {{ $t('skills') }}
        </p>
        <ul class="list-inside">
          <li>
            <p class="mt-4 mb-4 font-medium text-xl p-2 bg-[#6890bf9e] w-fit rounded-lg">
              {{ $t('programmingLanguages') }}
            </p>
            <ul class="list-inside ms-4">
              <li
                v-for="programmingLanguage in programmingLanguages"
                :key="programmingLanguage"
              >
                {{ programmingLanguage }}
              </li>
            </ul>
          </li>
          <li>
            <p class="mt-4 mb-4 font-medium text-xl p-2 bg-[#6890bf9e] w-fit rounded-lg">
              {{ $t('frameworks') }}
            </p>
            <ul class="list-inside ms-4">
              <li
                v-for="framework in librariesAndFrameworks"
                :key="framework"
              >
                {{ framework }}
              </li>
            </ul>
          </li>

          <li>
            <p class="mt-4 mb-4 font-medium text-xl p-2 bg-[#6890bf9e] w-fit rounded-lg">
              {{ $t('languages') }}
            </p>
            <ul class="list-inside ms-4">
              <li
                v-for="language in languages"
                :key="language.name"
              >
                {{ language.name }} - ({{ language.proficiency }})
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { JobPoint, Language } from '@@/types/Interfaces'

const i18n = useI18n()

const ArsipaJobPoints: JobPoint[] = [
  {
    point_title: i18n.t('arsipaPoint1'),
    point_links: [],
  },
  {
    point_title: i18n.t('arsipaPoint2'),
    point_links: [],
  },
  {
    point_title: i18n.t('arsipaPoint3'),
    point_links: [],
  },
  {
    point_title: i18n.t('arsipaPoint4'),
    point_links: [],
  },
]

const ImtilakJobPoints: JobPoint[] = [
  {
    point_title: i18n.t('imtilakPoint1'),
    point_links: [],
  },
  {
    point_title: i18n.t('imtilakPoint2'),
    point_links: [],
  },
  {
    point_title: i18n.t('imtilakPoint3'),
    point_links: [
      {
        point_title: '[1]',
        point_href: 'https://www.imtilak.net/en/landing/istanbul-city-center',
      },
      {
        point_title: '[2]',
        point_href: 'https://www.imtilak.net/en/landing/trabzon-oversea',
      },
      {
        point_title: '[3]',
        point_href: 'https://www.imtilak.net/en/landing/new-large-investments',
      },
      {
        point_title: '[4]',
        point_href: 'https://www.imtilak.net/en/landing/toskana-project',
      },
      {
        point_title: '[5]',
        point_href: 'https://www.imtilak.net/ar/landing/sapanca-lake-villas',
      },
      {
        point_title: '[6]',
        point_href: 'https://www.imtilak.net/en/landing/riva-villas',
      },
    ],
  },
]

const InceJobPoints: JobPoint[] = [
  {
    point_title: i18n.t('incePoint1'),
    point_links: [],
  },
  {
    point_title: i18n.t('incePoint2'),
    point_links: [],
  },
]
const programmingLanguages = ref<string[]>([
  'HTML',
  'CSS|SCSS',
  'JavaScript',
  'TypeScript',
  'PHP',
  'SQL',
])
const librariesAndFrameworks = ref<string[]>([
  'Vue',
  'Nuxt',
  'Pinia',
  'Vuex',
  'React',
  'Inertia.js',
  'Laravel',
  'Blade template engine',
  'GraphQl',
  'Tailwind CSS',
])

const languages = ref<Language[]>([
  { name: `${i18n.t('arabic')}`, proficiency: `${i18n.t('native')}` },
  { name: `${i18n.t('english')}`, proficiency: `${i18n.t('advanced')}` },
  { name: `${i18n.t('turkish')}`, proficiency: `${i18n.t('advanced')}` },
])
useHead({
  title: `${i18n.t('home')} | ${i18n.t('abdurrahman')}`,
})
useSeoMeta({
  ogTitle: `${i18n.t('home')} | ${i18n.t('abdurrahman')}`,
  description: `${i18n.t('summery')}`,
  ogDescription: `${i18n.t('summery')}`,
  ogImage: '/images/my-icon.png',
  twitterCard: 'summary_large_image',
})
</script>
