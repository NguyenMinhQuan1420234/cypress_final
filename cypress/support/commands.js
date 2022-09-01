// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
const { LoginPage } = require("../pages/login-page")
require('cy-verify-downloads').addCustomCommand()
require('cypress-downloadfile/lib/downloadFileCommand')
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('login', (username, password) => {
    LoginPage.inputUsername(username)
    LoginPage.inputPassword(password)
    LoginPage.clickLoginButton()
})

Cypress.Commands.add("loginWithDefaultAccount", function () {
    cy.fixture('users.json').as('user')
    cy.get('@user').then((user) => {
        LoginPage.inputUsername(this.user.username)
        LoginPage.inputPassword(this.user.password)
        LoginPage.clickLoginButton()
    })
})
Cypress.Commands.add('hover', selector => {
    cy.xpath(selector).realHover('mouseover');
});

// Request helper ---------
Cypress.Commands.add('sendRequest', (method, url, body, options = {}) => {
    cy.request({
        method: method,
        url: Cypress.env('baseAPIurl') + url,
        headers: {
            Authorization: 'Bearer ' + Cypress.env('APIToken'),
            accept: 'application/json'
        },
        body: body
    }).then((response) => {
        return response
    })
    Cypress.Commands.add('hover', selector => {
        cy.xpath(selector).realHover('mouseover');
    })
})

Cypress.Commands.add('downloadFile', (url, directory, fileName) => {
  return cy.getCookies().then((cookies) => {
        return cy.task('downloadFile', {
          url,
          directory,
          cookies,
          fileName,
        })
      })
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })