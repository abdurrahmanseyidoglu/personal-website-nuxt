<template>
  <footer class="w-full pt-12 pb-8">
    <p class="text-center mb-4">
      {{ $t('copyRight') }} {{ new Date().getFullYear() }}
    </p>
    <div class="flex items-center justify-center gap-4">
      <template
        v-for="link in footerLinks"
        :key="link.link"
      >
        <a
          :href="link.link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="link.platformName"
        >
          <Icon
            :name="`grommet-icons:${link.icon}`"
            size="1.5rem"
            class="text-neutral-800 dark:text-slate-200"
          />
        </a>
      </template>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerLinks = [
  {
    platformName: 'GitHub',
    link: 'https://github.com/abdurrahmanseyidoglu',
    icon: 'github',
  },
  {
    platformName: 'LinkedIn',
    link: 'https://www.linkedin.com/in/abdurrahmanseyidoglu/',
    icon: 'linkedin',
  },
  {
    platformName: 'X',
    link: 'https://x.com/ll_alsayed',
    icon: 'x',
  },
]
</script>
