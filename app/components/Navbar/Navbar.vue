<template>
  <div class="flex items-center justify-between py-4 sticky top-0 bg-white dark:bg-zinc-800 z-50 shadow-[0_1px_0_rgba(17,17,26,0.1)] w-full">
    <div class="max-w-5xl w-full flex items-center justify-between mx-auto px-4">
      <!-- Logo / Home Link -->
      <div class="flex items-center justify-start gap-4">
        <CustomLink
          :href="`/`"
          :title="$t('home')"
        />
      </div>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center justify-end gap-4 cursor-pointer">
        <NuxtLink
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="relative px-3 py-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors"
          active-class="language-active"
        >
          {{ locale.langName }}
        </NuxtLink>
      </div>

      <div class="hidden lg:flex items-center gap-3">
        <span class="text-sm font-semibold text-neutral-600 dark:text-neutral-300">{{ t('enableAnimations') }}</span>
        <USwitch v-model="animationEnabled" />
      </div>

      <div class="hidden lg:flex items-center justify-end gap-4 cursor-pointer">
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

      <!-- Mobile Burger Button -->
      <button
        class="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50 hover:cursor-pointer"
        aria-label="Toggle menu"
        @click="toggleMobileMenu"
      >
        <span
          class="burger-line block w-6 h-0.5 bg-neutral-800 dark:bg-slate-200 rounded transition-all duration-300 ease-in-out"
          :class="{ 'rotate-45 translate-y-1.5': isMobileMenuOpen }"
        />
        <span
          class="burger-line block w-6 h-0.5 bg-neutral-800 dark:bg-slate-200 rounded transition-all duration-300 ease-in-out mt-1.5"
          :class="{ 'opacity-0': isMobileMenuOpen }"
        />
        <span
          class="burger-line block w-6 h-0.5 bg-neutral-800 dark:bg-slate-200 rounded transition-all duration-300 ease-in-out mt-1.5"
          :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"
        />
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
        @click="closeMobileMenu"
      />
    </Transition>

    <!-- Mobile Menu Panel -->
    <Transition name="slide">
      <div
        v-if="isMobileMenuOpen"
        class="fixed top-0 right-0 h-full w-73 bg-white dark:bg-zinc-800 z-40 lg:hidden shadow-xl pt-20 px-6 overflow-y-auto"
      >
        <!-- Language Switcher -->
        <div class="flex flex-col gap-3 mb-6">
          <span class="text-sm font-semibold text-neutral-600 dark:text-neutral-300">{{ t('languages') }}</span>
          <div class="flex flex-wrap gap-3">
            <NuxtLink
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="relative px-3 py-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors"
              active-class="language-active"
              @click="closeMobileMenu"
            >
              {{ locale.langName }}
            </NuxtLink>
          </div>
        </div>

        <!-- Animation Toggle -->
        <div class="flex items-center justify-between gap-3 py-4 border-t border-neutral-200 dark:border-zinc-600">
          <span class="text-sm font-semibold text-neutral-600 dark:text-neutral-300">{{ t('enableAnimations') }}</span>
          <USwitch v-model="animationEnabled" />
        </div>

        <!-- Theme Switcher -->
        <div class="flex flex-col gap-3 py-4 border-t border-neutral-200 dark:border-zinc-600">
          <span class="text-sm font-semibold text-neutral-600 dark:text-neutral-300">{{ t('theme') }}</span>
          <div class="flex items-center gap-4">
            <button
              class="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors"
              @click="handleThemeChange('dark')"
            >
              <Icon
                name="ic:round-nights-stay"
                size="1.5rem"
                class="text-neutral-800 dark:text-slate-200"
              />
            </button>
            <button
              class="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors"
              @click="handleThemeChange('light')"
            >
              <Icon
                name="material-symbols:light-mode-outline-rounded"
                size="1.5rem"
                class="text-neutral-800 dark:text-slate-200"
              />
            </button>
            <button
              class="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors"
              @click="handleThemeChange('system')"
            >
              <Icon
                name="material-symbols:monitor-outline"
                size="1.5rem"
                class="text-neutral-800 dark:text-slate-200"
              />
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <FluidCursor v-if="animationEnabled" />
  </div>
</template>

<script lang="ts" setup>
const { animationEnabled } = useAnimations()
const colorMode = useColorMode()
const { locales } = useI18n()
const { t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value
})
const handleThemeChange = (themeType: string) => {
  colorMode.preference = themeType
}

// Mobile menu state
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close menu on route change
const route = useRoute()
watch(() => route.fullPath, () => {
  closeMobileMenu()
})

// Prevent body scroll when menu is open
watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  }
  else {
    document.body.style.overflow = ''
  }
})
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

/* Fade transition for overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide transition for menu panel */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
