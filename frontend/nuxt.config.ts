// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@bootstrap-vue-next/nuxt', '@nuxtjs/i18n'],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '~/assets/css/main.scss',
  ],
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'tr',
    locales: [
      { code: 'en', name: 'English', file: 'messages.ts' },
      { code: 'tr', name: 'Turkish', file: 'messages.ts' },
      { code: 'fr', name: 'French', file: 'messages.ts' },
      { code: 'es', name: 'Spanish.', file: 'messages.ts' },
      { code: 'it', name: 'Italian', file: 'messages.ts' },
      { code: 'ru', name: 'Russian', file: 'messages.ts' },
    ],
  },
  runtimeConfig: {
    public: {
      api: process.env.API,
    },
  },
});
