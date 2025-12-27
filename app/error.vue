<template>
  <div
    class="error-page"
    :dir="locale === 'ar' ? 'rtl' : 'ltr'"
  >
    <h1 class="error-code">
      {{ error?.statusCode ?? 500 }}
    </h1>
    <p class="error-message">
      {{ errorMessage }}
    </p>
    <NuxtLink
      :to="localePath('/')"
      class="home-link"
    >
      {{ t('error.goHome') }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const error = useError()

const errorMessage = computed(() => {
  if (error.value?.statusCode === 404) {
    return t('error.pageNotFound')
  }
  if (error.value?.statusCode === 500) {
    return t('error.serverError')
  }
  return error.value?.message || t('error.somethingWrong')
})
</script>

<style scoped lang="scss">
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 2rem;
}

.error-code {
  font-size: 6rem;
  font-weight: 700;
  margin: 0;
  color: var(--color-primary, #333);
}

.error-message {
  font-size: 1.5rem;
  margin: 1rem 0 2rem;
  color: var(--color-text, #666);
}

.home-link {
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary, #333);
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
}
</style>
