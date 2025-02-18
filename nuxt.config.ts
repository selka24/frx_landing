// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
      '@nuxtjs/tailwindcss',
      'nuxt-icons',
  ],
  css: [
      '~/assets/css/main.css',
      '~/assets/css/hamburger.css',
  ]
})
