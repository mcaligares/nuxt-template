export default defineNuxtConfig({
  modules: [
    'nuxt-primevue'
  ],
  typescript: {
    typeCheck: false
  },
  devtools: {
    enabled: true
  },
  ssr: false,
  css: [
    'primeicons/primeicons.css',
    'primevue/resources/themes/aura-light-green/theme.css'
  ]
})
