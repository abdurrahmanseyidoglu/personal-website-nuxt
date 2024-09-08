// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Page transition
  // app: {
  //     pageTransition: { name: 'page', mode: 'out-in' }
  // },

  //Sitemap
  site: {
    url: 'https://abdurrahmanseyidoglu.com/',
    name: 'Abdurrahman Seyidoglu'
  },

  // Devtools
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
    'nuxt-gtag'
  ],

  //Gtag
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: process.env.NUXT_GTAG_ID
  },

  // Nuxt Content options
  content: {
    documentDriven: {},
    highlight: {
      theme: 'github-dark'
    },
    contentHead: true
    // defaultLocale: 'en',
    // locales: ['en', 'ar']
  },

  googleFonts: {
    families: {
      'Roboto Mono': [400, 500, 600, 700],
      Rubik: [400, 500, 600, 700]
    }
  },

  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
        dir: 'ltr',
        //Custom Properties
        langName: 'English'
      },
      {
        code: 'ar',
        iso: 'ar-SY',
        dir: 'rtl',
        file: 'ar-SY.json',
        //Custom Properties
        langName: 'العربيّة'
      }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales'
  },

  compatibilityDate: '2024-09-08'
})