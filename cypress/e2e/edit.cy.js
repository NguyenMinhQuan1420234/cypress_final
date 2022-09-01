const { NavigationPage } = require("../pages/navigation-pages.js")
const { HomePage } = require("../pages/home-page.js")
const { EditPage } = require("../pages/edit-page.js")
const { UrlConstants } = require("../constants/url-constants.js")
const { APIEndpoints } = require("../constants/api-endpoints.js")
describe('Edit Profile', () => {
    before(() => {
        cy.fixture("edit.json").as("input")
        cy.visit(Cypress.env('baseUrl') + UrlConstants.LOGIN_URL)
        cy.loginWithDefaultAccount()
        HomePage.clickGotIt()
        HomePage.clickProfileIcon()
        HomePage.clickViewProfile()
    })
    it('edit profile', function () {
        HomePage.clickEditProfile()
        // cy.visit('https://unsplash.com/account')
        EditPage.inputFirstName(this.input.newProfile.firstname)
        EditPage.inputLastName(this.input.newProfile.lastname)
        EditPage.inputUsername(this.input.newProfile.username)
        EditPage.inputLocation(this.input.newProfile.location)
        EditPage.inputSite(this.input.newProfile.site)
        EditPage.inputBio(this.input.newProfile.bio)
        EditPage.inputInterests(this.input.newProfile.interest)
        EditPage.inputInstagram(this.input.newProfile.instagram)
        EditPage.inputTwitter(this.input.newProfile.twitter)
        EditPage.inputDonation(this.input.newProfile.donation)
        EditPage.clickUpdateButton()
        cy.visit("https://unsplash.com/@" + this.input.newProfile.username)

        NavigationPage.getFullname().should('have.text', this.input.newProfile.firstname + " " + this.input.newProfile.lastname)

    })
    after(function () {
        cy.get('@input').then((input) => {
            cy.log(input)
            cy.sendRequest(
                'PUT', 
                APIEndpoints.ENDPOINT_USER_PROFILE_EDIT,
                {
                    'username': input.defaultProfile.username,
                    'first_name': input.defaultProfile.firstname,
                    'last_name': input.defaultProfile.lastname,
                    'email': input.defaultProfile.email,
                    'url': input.defaultProfile.site,
                    'location': input.defaultProfile.location,
                    'bio': input.defaultProfile.bio,
                    'instagram_username': input.defaultProfile.instagram
                })
        })
    })
})