<template>
  <div class="w-full">
    <ClientOnly v-if="animationEnabled">
      <LazyBlurReveal
        :duration="0.5"
        class="w-full"
      >
        <picture>
          <source
            media="(min-width: 1024px)"
            srcset="/images/my-icon.webp"
          >
          <img
            src="/images/my-icon_50.webp"
            alt="personal picture of the website owner pixilated"
            width="102"
            height="102"
            fetchpriority="high"
            class="block size-25.5 shrink-0 object-cover"
          >
        </picture>
      </LazyBlurReveal>
    </ClientOnly>
    <picture v-else>
      <source
        media="(min-width: 1024px)"
        srcset="/images/my-icon.webp"
      >
      <img
        src="/images/my-icon_50.webp"
        alt="personal picture of the website owner pixilated"
        width="102"
        height="102"
        fetchpriority="high"
        class="block size-25.5 shrink-0 object-cover"
      >
    </picture>

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
          {{ $t('summary') }}
        </p>
      </LazyBlurReveal>
    </ClientOnly>
    <p
      v-else
      class="my-4"
    >
      {{ $t('summary') }}
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
        <template
          v-for="(job, index) in employmentCards"
          :key="job.companyName"
        >
          <hr
            v-if="index > 0"
            class="my-4 w-[60%] h-px border-t border-dashed ms-0"
          >
          <ClientOnly v-if="animationEnabled">
            <LazyBlurReveal
              :duration="0.5"
              class="w-full"
            >
              <EmploymentCard v-bind="job" />
            </LazyBlurReveal>
          </ClientOnly>
          <EmploymentCard
            v-else
            v-bind="job"
          />
        </template>
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
              :key="language.nameKey"
            >
              <ClientOnly v-if="animationEnabled">
                <LazyBlurReveal
                  :duration="0.5"
                  class="w-full"
                >
                  {{ $t(language.nameKey) }} - ({{ $t(language.proficiencyKey) }})
                </LazyBlurReveal>
              </ClientOnly>
              <template v-else>
                {{ $t(language.nameKey) }} - ({{ $t(language.proficiencyKey) }})
              </template>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { JobDate } from '@@/types/Interfaces'
import { jobs, languages, librariesAndFrameworks, programmingLanguages } from '~/data/resume'

const { animationEnabled } = useAnimations()

const i18n = useI18n()

const formatDate = (date?: JobDate) => date ? `${i18n.t(date.monthKey)} ${date.year}` : i18n.t('present')

const employmentCards = computed(() => jobs.map(job => ({
  date: `${formatDate(job.start)} - ${formatDate(job.end)}`,
  jobTile: i18n.t(job.titleKey),
  companyName: i18n.t(job.companyKey),
  companyLocation: `${i18n.t(job.cityKey)} / ${i18n.t(job.countryKey)}`,
  jobPoints: job.points.map(point => ({
    point_title: i18n.t(point.key),
    point_links: point.links ?? [],
  })),
})))

useHead({
  title: `${i18n.t('home')} | ${i18n.t('abdurrahman')}`,
})
useSeoMeta({
  ogTitle: `${i18n.t('home')} | ${i18n.t('abdurrahman')}`,
  description: `${i18n.t('summary')}`,
  ogDescription: `${i18n.t('summary')}`,
  ogImage: '/images/my-icon.png',
  twitterCard: 'summary_large_image',
})
</script>
