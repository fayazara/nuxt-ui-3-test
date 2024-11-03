export default defineNuxtConfig({
  modules: [
    "@nuxthub/core",
    "@nuxt/ui",
    "@formkit/auto-animate/nuxt",
    "@vueuse/nuxt",
  ],
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-07-30",
  icon: {
    clientBundle: {
      scan: true,
    },
  },
  fonts: {
    families: [
      {
        name: "Geist Mono",
        provider: "fontsource",
        weights: ["400", "500", "600", "700", "800"],
      },
    ],
  },
  hub: {},
});
