// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Devtools
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxtjs/google-fonts", "@nuxtjs/i18n","nuxt-icon"],

  // Nuxt Content options
  content: {
  },
  googleFonts: {
    families: {
      'Roboto Mono': [400, 500, 600, 700]
    }
  },


  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'prefix_except_default',
    locales: [
      {
        "code": 'en',
        "iso": 'en-US',
        "file": "en-US.ts",
        "dir": "ltr",
      },
      {
        "code": 'ar',
        "iso": 'ar-SY',
        "dir": 'rtl',
        "file": "ar-SY.ts"
      }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang',
    baseUrl: 'https://my-nuxt-app.com'

  }
})