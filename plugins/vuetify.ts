// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration

    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#3674B5",
            secondary: "#16ffd0",
            white: "#FFFFFF",
            black: "#040ale",
            alto: "#dedede",
          },
        },
      },
    },
  });

  app.vueApp.use(vuetify);
});
