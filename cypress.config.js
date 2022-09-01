/// <reference types="Cypress" />
const { defineConfig } = require("cypress");
const { isFileExist, findFiles } = require("cy-verify-downloads");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
const fs = require('fs');
module.exports = defineConfig({
  //DEFAULT CONFIGURATION
  defaultCommandTimeout: 10000,
  //e2e options
  e2e: {
    baseUrl: "https://unsplash.com",
    projectId: "wmbmub",
    specPattern: "**/*.cy.js",
    chromeWebSecurity: false,
    video: true,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
        on("task", { downloadFile })
        on("task", { isFileExist, findFiles })
        on('task', {
          downloads:  (downloadspath) => {
            return fs.readdirSync(downloadspath)
          }
        })
    },
  },
  //env options
  env: {
    baseUrl: "https://unsplash.com",
    baseAPIurl: "https://api.unsplash.com",
    APIToken: "NprmQCznDDFrewMYeeRZuqNqd5qYGlAHNskvzvHqSyI",
  },
});

