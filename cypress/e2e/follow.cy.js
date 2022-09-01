const { NavigationPage } = require("../pages/navigation-pages.js")
const { HomePage } = require("../pages/home-page.js") 
const {PhotoDetailPage} = require("../pages/photo-detail-page.js")
const { UrlConstants } = require("../constants/url-constants.js")
describe('Click Following Photographer', () => {
    before(() => {
        // cy.fixture("users.json").as('users')
        cy.visit(Cypress.env('baseUrl') + UrlConstants.LOGIN_URL)
        cy.loginWithDefaultAccount()
    })
    it('follow photographer', function () {
        HomePage.clickFirstImage()
        PhotoDetailPage.hoverOnImageIcon()
        PhotoDetailPage.clickFollowButton()
        PhotoDetailPage.getIcon().should('have.attr', 'title').and('equal', 'Following')
        PhotoDetailPage.getIcon().should('have.css', 'color', 'rgb(17, 17, 17)')
    })
    after(()=>{
        PhotoDetailPage.clickFollowButton()
    })
})