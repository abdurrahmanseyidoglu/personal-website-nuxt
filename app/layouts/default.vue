<template>
  <div class="bg-white dark:bg-zinc-800 min-h-screen text-neutral-800 dark:text-slate-200">
    <Navbar />
    <div class="max-w-5xl mx-auto px-4 min-h-screen">
      <main>
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>
