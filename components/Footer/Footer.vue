<template>
<p>{{$t('copyRight')}} {{new Date().getFullYear()}}</p>
</template>
<style lang="scss">
h1{
  color: red;
}
</style>
<script setup lang="ts">
const i18n = useI18n()
const footerLinks = [
  {
    'platformName': 'GitHub',
    'link': 'https://github.com/abdurrahmanseyidoglu',
    'icon': 'github',
  },
  {
    'platformName': 'LinkedIn',
    'link': 'https://www.linkedin.com/in/abdurrahmanseyidoglu/',
    'icon': 'linkedin',
  }
]
</script>