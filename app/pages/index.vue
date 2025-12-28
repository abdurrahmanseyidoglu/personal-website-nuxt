<template>
  <div class="w-full">
    <ClientOnly v-if="animationEnabled">
      <LazyBlurReveal
        :duration="0.5"
        class="w-full"
      >
        <NuxtImg
          class="w-25.5"
          src="/images/my-icon.png"
          alt="personal picture of the website owner pixilated"
          width="102"
          height="102"
        />
      </LazyBlurReveal>
    </ClientOnly>
    <NuxtImg
      v-else
      class="w-25.5"
      src="/images/my-icon.png"
      alt="personal picture of the website owner pixilated"
      width="102"
      height="102"
    />

    <!-- Greeting -->
    <ClientOnly v-if="animationEnabled">
      <LazyBlurReveal
        :duration="0.5"
        class="w-full"
      >
        <p class="text-3xl md:text-5xl font-semibold mt-4">
          {{ $t('hi') }}
        </p>
      </LazyBlurReveal>
    </ClientOnly>
    <p
      v-else
      class="text-3xl md:text-5xl font-semibold mt-4"
    >
      {{ $t('hi') }}
    </p>

    <!-- Summary -->
    <ClientOnly v-if="animationEnabled">
      <LazyBlurReveal
        :duration="0.5"
        class="w-full"
      >
        <p class="my-4">
          {{ $t('summery') }}
        </p>
      </LazyBlurReveal>
    </ClientOnly>
    <p
      v-else
      class="my-4"
    >
      {{ $t('summery') }}
    </p>

    <hr class="my-4 w-full h-px border-t border-solid">

    <!-- PROFESSIONAL EXPERIENCE -->
    <div>
      <ClientOnly v-if="animationEnabled">
        <LazyBlurReveal
          :duration="0.5"
          class="w-full"
        >
          <p class="text-xl md:text-2xl font-medium mb-4 mt-8">
            {{ $t('experience') }}
          </p>
        </LazyBlurReveal>
      </ClientOnly>
      <p
        v-else
        class="text-xl md:text-2xl font-medium mb-4 mt-8"
      >
        {{ $t('experience') }}
      </p>

      <div class="flex items-center justify-center flex-col w-full">
        <ClientOnly v-if="animationEnabled">
          <LazyBlurReveal
            :duration="0.5"
            class="w-full"
          >
            <EmploymentCard
              :date="`${$t('january')} 2025 - ${$t('present')}`"
              :job-tile="$t('frontEnd')"
              :company-name="$t('arsipaGmbh')"
              :company-location="`${$t('berlin')} / ${$t('germany')}`"
              :job-points="ArsipaJobPoints"
            />
          </LazyBlurReveal>
        </ClientOnly>
        <EmploymentCard
          v-else
          :date="`${$t('january')} 2025 - ${$t('present')}`"
          :job-tile="$t('frontEnd')"
          :company-name="$t('arsipaGmbh')"
          :company-location="`${$t('berlin')} / ${$t('germany')}`"
          :job-points="ArsipaJobPoints"
        />

        <hr class="my-4 w-[60%] h-px border-t border-dashed ms-0">

        <ClientOnly v-if="animationEnabled">
          <LazyBlurReveal
            :duration="0.5"
            class="w-full"
          >
            <EmploymentCard
              :date="`${$t('november')} 2021 - ${$t('december')} 2024`"
              :job-tile="$t('frontEnd')"
              :company-name="$t('imtilakGroup')"
              :company-location="`${$t('istanbul')} / ${$t('turkey')}`"
              :job-points="ImtilakJobPoints"
            />
          </LazyBlurReveal>
        </ClientOnly>
        <EmploymentCard
          v-else
          :date="`${$t('november')} 2021 - ${$t('december')} 2024`"
          :job-tile="$t('frontEnd')"
          :company-name="$t('imtilakGroup')"
          :company-location="`${$t('istanbul')} / ${$t('turkey')}`"
          :job-points="ImtilakJobPoints"
        />

        <hr class="my-4 w-[60%] h-px border-t border-dashed ms-0">

        <ClientOnly v-if="animationEnabled">
          <LazyBlurReveal
            :duration="0.5"
            class="w-full"
          >
            <EmploymentCard
              :date="`${$t('may')} 2020 - ${$t('september')} 2021`"
              :job-tile="$t('frontEnd')"
              :company-name="$t('inceGroup')"
              :company-location="`${$t('istanbul')} / ${$t('turkey')}`"
              :job-points="InceJobPoints"
            />
          </LazyBlurReveal>
        </ClientOnly>
        <EmploymentCard
          v-else
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
      <ClientOnly v-if="animationEnabled">
        <LazyBlurReveal
          :duration="0.5"
          class="w-full"
        >
          <p class="mb-4 font-medium text-xl md:text-2xl mt-8">
            {{ $t('skills') }}
          </p>
        </LazyBlurReveal>
      </ClientOnly>
      <p
        v-else
        class="mb-4 font-medium text-xl md:text-2xl mt-8"
      >
        {{ $t('skills') }}
      </p>

      <ul class="list-inside">
        <li>
          <ClientOnly v-if="animationEnabled">
            <LazyBlurReveal
              :duration="0.5"
              class="w-full"
            >
              <p class="mt-4 mb-4 font-medium text-lg md:text-xl p-2 bg-[#6890bf9e] w-fit rounded-lg">
                {{ $t('programmingLanguages') }}
              </p>
            </LazyBlurReveal>
          </ClientOnly>
          <p
            v-else
            class="mt-4 mb-4 font-medium text-lg md:text-xl p-2 bg-[#6890bf9e] w-fit rounded-lg"
          >
            {{ $t('programmingLanguages') }}
          </p>
          <ul class="list-inside ms-4">
            <li
              v-for="programmingLanguage in programmingLanguages"
              :key="programmingLanguage"
            >
              <ClientOnly v-if="animationEnabled">
                <LazyBlurReveal
                  :duration="0.5"
                  class="w-full"
                >
                  {{ programmingLanguage }}
                </LazyBlurReveal>
              </ClientOnly>
              <template v-else>
                {{ programmingLanguage }}
              </template>
            </li>
          </ul>
        </li>
        <li>
          <ClientOnly v-if="animationEnabled">
            <LazyBlurReveal
              :duration="0.5"
              class="w-full"
            >
              <p class="mt-4 mb-4 font-medium text-lg md:text-xl p-2 bg-[#6890bf9e] w-fit rounded-lg">
                {{ $t('frameworks') }}
              </p>
            </LazyBlurReveal>
          </ClientOnly>
          <p
            v-else
            class="mt-4 mb-4 font-medium text-lg md:text-xl p-2 bg-[#6890bf9e] w-fit rounded-lg"
          >
            {{ $t('frameworks') }}
          </p>
          <ul class="list-inside ms-4">
            <li
              v-for="framework in librariesAndFrameworks"
              :key="framework"
            >
              <ClientOnly v-if="animationEnabled">
                <LazyBlurReveal
                  :duration="0.5"
                  class="w-full"
                >
                  {{ framework }}
                </LazyBlurReveal>
              </ClientOnly>
              <template v-else>
                {{ framework }}
              </template>
            </li>
          </ul>
        </li>

        <li>
          <ClientOnly v-if="animationEnabled">
            <LazyBlurReveal
              :duration="0.5"
              class="w-full"
            >
              <p class="mt-4 mb-4 font-medium text-lg md:text-xl p-2 bg-[#6890bf9e] w-fit rounded-lg">
                {{ $t('languages') }}
              </p>
            </LazyBlurReveal>
          </ClientOnly>
          <p
            v-else
            class="mt-4 mb-4 font-medium text-lg md:text-xl p-2 bg-[#6890bf9e] w-fit rounded-lg"
          >
            {{ $t('languages') }}
          </p>
          <ul class="list-inside ms-4">
            <li
              v-for="language in languages"
              :key="language.name"
            >
              <ClientOnly v-if="animationEnabled">
                <LazyBlurReveal
                  :duration="0.5"
                  class="w-full"
                >
                  {{ language.name }} - ({{ language.proficiency }})
                </LazyBlurReveal>
              </ClientOnly>
              <template v-else>
                {{ language.name }} - ({{ language.proficiency }})
              </template>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { JobPoint, Language } from '@@/types/Interfaces'

const { animationEnabled } = useAnimations()

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
