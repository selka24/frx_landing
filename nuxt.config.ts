// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: false},
    css: [
        '~/assets/css/main.css',
        '~/assets/css/hamburger.css',
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icons',
        '@nuxtjs/i18n',
    ],
    i18n: {
        lazy: true,
        langDir: "../locales",
        strategy: "no_prefix",
        defaultLocale: "en", // Default Language
        locales: [
            { code: "fr", iso: "fr-FR", file: "fr.json"},
            { code: "en", iso: "en-GB", file: "en.json" },
            { code: "it", iso: "it-IT", file: "it.json" },
            { code: "es", iso: "es-ES", file: "es.json" },
            { code: "de", iso: "de-DE", file: "de.json" },
        ],
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root' // recommended
        },
        compilation: {
            strictMessage: false,
        }
    }
})
