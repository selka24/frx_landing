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
        vueI18n: './i18n.config.js' // custom path example
    }
})
