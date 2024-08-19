// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // Page transition
    // app: {
    //     pageTransition: { name: 'page', mode: 'out-in' }
    // },

    // Devtools
    devtools: {enabled: true},
    modules: [
        '@nuxt/content',
        "@nuxtjs/google-fonts",
        "@nuxtjs/i18n",
        "nuxt-icon",
        "@nuxtjs/tailwindcss",
        "@nuxt/eslint"
    ],

    // Nuxt Content options
    content: {
        documentDriven: {},
        highlight: {
            theme: 'github-dark'
        },
        contentHead:true,
        // defaultLocale: 'en',
        // locales: ['en', 'ar']
    },
    googleFonts: {
        families: {
            'Roboto Mono': [400, 500, 600, 700]
        }
    },


    i18n: {
        vueI18n: './i18n.config.ts',
        strategy: 'prefix',
        locales: [
            {
                "code": 'en',
                "iso": 'en-US',
                "file": "en-US.json",
                "dir": "ltr",
                //Custom Properties
                "langName": "English"
            },
            {
                "code": 'ar',
                "iso": 'ar-SY',
                "dir": 'rtl',
                "file": "ar-SY.json",
                //Custom Properties
                "langName": "العربيّة"

            }
        ],
        defaultLocale: 'en',
        lazy: true,
        langDir: 'locales',

    }
})