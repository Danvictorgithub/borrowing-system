// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  future: {
    compatibilityVersion: 4
  },

  devServer: {
    port: 4200,
  },

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/auto-animate',
    '@vueuse/nuxt',
    '@nuxt/icon'
  ]
})