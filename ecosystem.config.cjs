module.exports = {
  apps: [
    {
      name: "mitranet-landingpage",
      port: "5000",
      exec_mode: "cluster",
      script: "./.output/server/index.mjs",
    },
  ],
};
