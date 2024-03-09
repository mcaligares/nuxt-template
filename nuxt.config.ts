export default defineNuxtConfig({
  modules: [
    'nuxt-primevue',
    '@nuxt/test-utils/module'
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
});
