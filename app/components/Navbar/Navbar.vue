<template>
  <div class="flex items-center justify-between py-4 sticky top-0 bg-white dark:bg-zinc-800 z-10 shadow-[0_1px_0_rgba(17,17,26,0.1)] w-full">
    <div class="max-w-5xl w-full flex items-center justify-between mx-auto px-4">
      <div class="flex items-center justify-start gap-4">
        <CustomLink
          :href="`/`"
          :title="$t('home')"
        />
      <!-- <CustomLink :href="`/portfolio`" :title="$t('portfolio')" /> -->
      </div>
      <div class="flex items-center justify-end gap-4 cursor-pointer">
        <NuxtLink
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="relative"
          active-class="language-active"
        >
          {{ locale.langName }}
        </NuxtLink>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-sm">Animated Cursor</span>
        <USwitch v-model="animationEnabled" />
      </div>

      <div class="flex items-center justify-end gap-4 cursor-pointer">
        <Icon
          name="ic:round-nights-stay"
          size="1.5rem"
          class="text-neutral-800 dark:text-slate-200"
          @click="handleThemeChange('dark')"
        />
        <Icon
          name="material-symbols:light-mode-outline-rounded"
          size="1.5rem"
          class="text-neutral-800 dark:text-slate-200"
          @click="handleThemeChange('light')"
        />
        <Icon
          name="material-symbols:monitor-outline"
          size="1.5rem"
          class="text-neutral-800 dark:text-slate-200"
          @click="handleThemeChange('system')"
        />
      </div>
    </div>
    <FluidCursor v-if="animationEnabled" />
  </div>
</template>

<script lang="ts" setup>
const { animationEnabled } = useAnimations()
const colorMode = useColorMode()
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value
})
const handleThemeChange = (themeType: string) => {
  colorMode.preference = themeType
}
</script>

<style scoped>
.language-active::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: #339af0;
  bottom: -3px;
  z-index: 1;
  inset-inline-start: 0;
}
</style>
