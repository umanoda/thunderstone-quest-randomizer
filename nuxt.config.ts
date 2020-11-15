const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/thunderstone-quest-randomizer/",
        },
        devtools: false,
        vue: {
          config: {
            productionTip: false,
          },
        },
      }
    : {
        router: {
          base: "/",
        },
      };

/* eslint-disable camelcase */
const manifest = {
  name: "thunderstone-quest-randomizer",
  short_name: "ThunderStoneQ Rand",
  title: "thunderstone-quest-randomizer",
  "og:title": "thunderstone-quest-randomizer",
  description: "",
  "og:description": "",
  lang: "ja",
  theme_color: "#662344",
  background_color: "#bde0c0",
  display: "standalone",
  scope: "/",
  start_url: "/thunderstone-quest-randomizer/",
  icons: [
    {
      src: `${routerBase.router.base}icon-192.png`,
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: `${routerBase.router.base}icon-512.png`,
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

export default {
  env: {},
  mode: "spa",
  head: {
    title: "Thunderstone QUEST Randamizer",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js TypeScript project",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css",
      },
    ],
  },
  loading: {
    color: "#3B8070",
  },
  css: ["~/assets/css/main.css"],
  build: {},
  buildModules: ["@nuxt/typescript-build"],
  pwa: {
    workbox: {
      dev: true,
    },
    manifest,
  },
  plugins: ["~/plugins/thunderStoneQuestMetadata"],
  modules: [["@nuxtjs/pwa", { icon: false }], "@nuxtjs/axios", "@nuxtjs/bulma"],
  axios: {},
  ...routerBase,
};
