// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Page transition
  // app: {
  //     pageTransition: { name: 'page', mode: 'out-in' }
  // },

  // Sitemap

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
    'nuxt-gtag',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/icon',
  ],

  // Devtools
  devtools: { enabled: true },
  site: {
    url: 'https://abdurrahmanseyidoglu.com/',
    name: 'Abdurrahman Seyidoglu',
  },
  // //Gtag
  // gtag: {
  //   enabled: process.env.NODE_ENV === 'production',
  //   id: process.env.NUXT_GTAG_ID
  // },

  // Color mode:
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },

  compatibilityDate: '2024-09-08',
  eslint: {
    config: {
      stylistic: true,
    },
  },

  googleFonts: {
    families: {
      'Roboto Mono': [400, 500, 600, 700],
      'Rubik': [400, 500, 600, 700],
    },
  },

  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'prefix',
    locales: [
      {
        code: 'ar',
        // iso: 'ar-SY',
        dir: 'rtl',
        file: 'ar-SY.json',
        // Custom Properties
        langName: 'العربيّة',
      },
      {
        code: 'en',
        // iso: 'en-US',
        file: 'en-US.json',
        dir: 'ltr',
        // Custom Properties
        langName: 'English',
      },
      {
        code: 'tr',
        // iso: 'tr-TR',
        dir: 'ltr',
        file: 'tr-TR.json',
        // Custom Properties
        langName: 'Türkçe',
      },
    ],
    defaultLocale: 'en',
  },
})
