const { defineConfig } = require("cypress");

module.exports = defineConfig({

  screenshotOnRunFailure: true,
  videoCompression: false,
  video: false,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,

  viewportWidth: 1920,
  viewportHeight: 1000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.freightcenter.com/nationwide-shipping/cities/miami'
  },
});
