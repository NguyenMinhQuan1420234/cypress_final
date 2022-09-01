const { NavigationPage } = require("../pages/navigation-pages.js")
const { HomePage } = require("../pages/home-page.js")
const { EditPage } = require("../pages/edit-page.js")
const { UrlConstants } = require("../constants/url-constants.js")
const { LikePhotoPage } = require("../pages/like-photo-page.js")
const { APIEndpoints } = require("../constants/api-endpoints.js")
describe('Click Like Pictures', () => {
    before(() => {
        cy.viewport(1600, 900)
        cy.fixture('edit.json').as('input')
        cy.visit(Cypress.env('baseUrl') + UrlConstants.LOGIN_URL)
        cy.loginWithDefaultAccount()
        // API get user like list
        cy.get('@input').then((input) => {
            cy.log(input)
            cy.sendRequest(
                'GET',
                APIEndpoints.ENDPOINT_USER_LIKE_LIST_GET.replace('%s', input.defaultProfile.username)
            ).then((response) => {
                if (response.body.length > 0) {
                    // API unlike all pictures from like list
                    for (let photoOrder = 0; photoOrder < response.body.length; photoOrder++) {
                        cy.sendRequest(
                            'DELETE',
                            APIEndpoints.ENDPOINT_PHOTO_UNLIKE.replace('%s', response.body[photoOrder].id),
                            { 'id': response.body[photoOrder].id }
                        )
                    }
                }
            })
        })
    })

    it('like pictures', function () {
        var downloadHref = []
        downloadHref = HomePage.clickLikeRandomPictures(3)
        cy.visit(Cypress.env('baseUrl') + "/" + this.input.defaultProfile.username + UrlConstants.LIKE_URL)
        var HrefInPhotoPage = LikePhotoPage.getDownloadLinkRef()
        for (let i = 0; i < HrefInPhotoPage.length; i++) {
            expect(downloadHref[i]).to.eqls(HrefInPhotoPage[i])
        }
    })
})