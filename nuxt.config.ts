// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/ionic", "@nuxtjs/tailwindcss", "nuxt-vuefire"],
  ssr: false,
  vuefire: {
    auth: false,
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      projectId: process.env.FIREBASE_PROJECT_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
  },
  ionic: {
    css: {
      utilities: true,
    },
  },
});
