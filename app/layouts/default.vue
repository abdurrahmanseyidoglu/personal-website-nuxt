<template>
  <div class="relative bg-white dark:bg-zinc-800 min-h-screen text-neutral-800 dark:text-slate-200">
    <Navbar />
    <LazySnowfallBg
      v-if="animationEnabled && isWinter"
      color="ADD8E6"
      class="absolute inset-0"
      :min-radius="0.2"
      :max-radius="5"
      :speed="0.5"
    />
    <LazyParticlesBg
      v-if="animationEnabled && !isWinter"
      :key="$colorMode.value"
      class="absolute inset-0"
      :quantity="200"
      :ease="100"
      :color="$colorMode.value==='dark' ? '#FFF' : '#000'"
      :staticity="30"
      refresh
    />
    <div class="max-w-5xl mx-auto px-4 min-h-screen">
      <main>
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { animationEnabled } = useAnimations()
const { isWinter } = useSeasonalEffect()
</script>
