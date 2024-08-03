// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // Page transition
    // app: {
    //     pageTransition: { name: 'page', mode: 'out-in' }
    // },

    // Devtools
    devtools: { enabled: true },
    modules: [
        '@nuxt/content',
        "@nuxtjs/google-fonts",
        "@nuxtjs/i18n",
        "nuxt-icon",
        "@nuxtjs/tailwindcss"
    ],

    // Nuxt Content options
    content: {
        documentDriven: {},
        highlight: {
            theme: 'github-dark'

        }
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
                //Custom Properties
                "langName": "English"
            },
            {
                "code": 'ar',
                "iso": 'ar-SY',
                "dir": 'rtl',
                "file": "ar-SY.ts",
                //Custom Properties
                "langName": "العربيّة"

            }
        ],
        defaultLocale: 'en',
        lazy: true,
        langDir: 'lang',

    }
})