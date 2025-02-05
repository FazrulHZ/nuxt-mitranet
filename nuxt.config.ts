// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Mitranet Data Nusantara",

      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/png", href: "/logo/logo1.png" }],

      meta: [
        {
          name: "description",
          content:
            "Mitranet Data Nusantara, perusahaan yang bergerak di bidang IT",
        },
        {
          name: "google",
          content: "notranslate",
        },
        {
          name: "googlebot",
          content: "index, follow",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "keywords",
          content: "Mitranet, Mitranusa, Mitranet Data Nusantara, PT Mitranet Data Nusantara, Gorontalo, Provinsi Gorontalo",
        },

        // OG Tags
        { hid: "og-type", name: "og:type", content: "website" },
        {
          hid: "og-title",
          property: "og:title",
          content: "Mitranet Data Nusantara",
        },
        {
          hid: "og-desc",
          property: "og:description",
          content:
            "Mitranet Data Nusantara, perusahaan yang bergerak di bidang IT",
        },
        {
          hid: "og-image",
          property: "og:image",
          content: "https://fia.co.id/logo/newlogo.png",
        },
        {
          hid: "og-url",
          property: "og:url",
          content: "https://mitranusa.id/",
        },
      ],
    },
  },

  build: {
    transpile: ["vuetify"],
  },

  modules: [
    "@nuxt/fonts",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
