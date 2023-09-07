const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1208,
    viewportHeight: 1280,
    baseUrl: "https://demoblaze.com/",
  },
});
