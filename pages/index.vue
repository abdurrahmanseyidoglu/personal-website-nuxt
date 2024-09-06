<template>
  <div class="home">
    <div class="about-me">
      <img
        class="my-icon"
        src="/images/my-icon.png"
        alt="personal picture of the website owner pixilated"
        width="102"
        height="102"
      />
      <p class="name">{{ $t('hi') }}</p>
      <p class="description">
        {{ $t('summery') }}
      </p>
      <hr class="separator" />
      <!-- PROFESSIONAL EXPERIENCE -->
      <div class="employment-history">
        <p class="employment-title">{{ $t('experience') }}</p>
        <div class="employment-cards-wrapper">
          <EmploymentCard
            :date="`${$t('november')} 2021 - ${$t('august')} 2024`"
            :jobTile="$t('frontEnd')"
            :companyName="$t('imtilakGroup')"
            :companyLocation="`${$t('istanbul')} / ${$t('turkey')}`"
            :jobPoints="ImtilakJobPoints"
          />
          <hr class="dashed-separator" />
          <EmploymentCard
            :date="`${$t('august')} 2020 - ${$t('october')} -2021`"
            :jobTile="$t('frontEnd')"
            :companyName="$t('inceGroup')"
            :companyLocation="`${$t('istanbul')} / ${$t('turkey')}`"
            :jobPoints="InceJobPoints"
          />
        </div>
      </div>

      <hr class="separator" />
      <!-- Skills Section -->
      <div class="my-skills">
        <p class="title">
          {{ $t('skills') }}
        </p>
        <ul class="skills">
          <li>
            <p class="sub-skill-title">{{ $t('programmingLanguages') }}</p>
            <ul class="sub-skills">
              <li
                class="sub-skill"
                v-for="programmingLanguage in programmingLanguages"
                :key="programmingLanguage"
              >
                {{ programmingLanguage }}
              </li>
            </ul>
          </li>
          <li>
            <p class="sub-skill-title">{{ $t('frameworks') }}</p>
            <ul class="sub-skills">
              <li class="sub-skill" v-for="framework in librariesAndFrameworks" :key="framework">
                {{ framework }}
              </li>
            </ul>
          </li>

          <li>
            <ul class="sub-skills">
              <p class="sub-skill-title">{{ $t('languages') }}</p>

              <li class="sub-skill" v-for="language in languages" :key="language.name">
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
import type { JobPoint, Language } from '~/types/Interfaces'

const i18n = useI18n()
const ImtilakJobPoints: JobPoint[] = [
  {
    point_title: i18n.t('imtilakPoint1'),
    point_links: []
  },
  {
    point_title: i18n.t('imtilakPoint2'),
    point_links: []
  },
  {
    point_title: i18n.t('imtilakPoint3'),
    point_links: []
  },
  {
    point_title: i18n.t('imtilakPoint4'),
    point_links: [
      {
        point_title: '[1]',
        point_href: 'https://www.imtilak.net/en/landing/istanbul-city-center'
      },
      {
        point_title: '[2]',
        point_href: 'https://www.imtilak.net/en/landing/trabzon-oversea'
      },
      {
        point_title: '[3]',
        point_href: 'https://www.imtilak.net/en/landing/new-large-investments'
      },
      {
        point_title: '[4]',
        point_href: 'https://www.imtilak.net/en/landing/toskana-project'
      },
      {
        point_title: '[5]',
        point_href: 'https://www.imtilak.net/ar/landing/sapanca-lake-villas'
      },
      {
        point_title: '[6]',
        point_href: 'https://www.imtilak.net/en/landing/riva-villas'
      }
    ]
  },
  {
    point_title: i18n.t('imtilakPoint5'),
    point_links: []
  },
  {
    point_title: i18n.t('imtilakPoint6'),
    point_links: []
  }
]

const InceJobPoints: JobPoint[] = [
  {
    point_title: i18n.t('incePoint1'),
    point_links: []
  },
  {
    point_title: i18n.t('incePoint2'),
    point_links: []
  },
  {
    point_title: i18n.t('incePoint3'),
    point_links: []
  },
  {
    point_title: i18n.t('incePoint4'),
    point_links: []
  }
]
const programmingLanguages = ref<string[]>([
  'HTML',
  'CSS|SCSS',
  'JavaScript',
  'TypeScript',
  'PHP',
  'SQL'
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
  'Tailwind CSS',
  'Bootstrap'
])

const languages = ref<Language[]>([
  { name: `${i18n.t('arabic')}`, proficiency: `${i18n.t('native')}` },
  { name: `${i18n.t('english')}`, proficiency: `${i18n.t('advanced')}` },
  { name: `${i18n.t('turkish')}`, proficiency: `${i18n.t('advanced')}` }
])
useHead({
  title: `${i18n.t('home')} | ${i18n.t('abdurrahman')}`
})
</script>

<style lang="scss">
@import './index';
</style>
