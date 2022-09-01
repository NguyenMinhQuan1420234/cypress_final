import { APIEndpoints } from "../constants/api-endpoints"
import { UrlConstants } from "../constants/url-constants"
import { AddToCollectionPage } from "../pages/add-to-collection-page"
import { CollectionInformationPage } from "../pages/collection-information-page"
import { CollectionPage } from "../pages/collection-page"

describe('collection', () => {
    var collectionName = 'Flowers collection'

    before(() => {
        cy.visit(Cypress.env('baseUrl') + UrlConstants.LOGIN_URL)
        cy.loginWithDefaultAccount()

        // API Create collection 
        cy.sendRequest(
            'POST',
            APIEndpoints.ENDPOINT_COLLECTION_CREATE,
            { 'title': collectionName }
        ).then((collection) => {
            for (let i = 0; i < 2; i++) {
                // API get random photo ID
                cy.sendRequest(
                    'GET',
                    APIEndpoints.ENDPOINT_PHOTO_RANDOM_GET
                ).then((photo) => {
                    // API add photo to collection
                    cy.sendRequest(
                        'POST',
                        APIEndpoints.ENDPOINT_COLLECTION_PHOTO_ADD.replace('%s', collection.body.id),
                        {
                            'collection_id': collection.body.i,
                            'photo_id': photo.body.id
                        }
                    )
                })
            }
        })
    })

    it('remove photo from collection successfully', () => {
        
        cy.visit(Cypress.env('baseUrl') + '/@' + 'default_username' + '/collections')
        CollectionPage.clickToCollection(collectionName)
        CollectionInformationPage.clickAddToCollectionBtn()
        AddToCollectionPage.selectColection(collectionName)

        cy.reload()
        CollectionInformationPage.getTotalPhoto().should('equal', 1)
    })

    after(() => {
        // API delete collection
        cy.fixture('edit.json').as('input')
        cy.get('@input').then((input) => {
            cy.sendRequest(
                'GET',
                APIEndpoints.ENDPOINT_COLLECTION_GET.replace('%s', input.defaultProfile.username)
            ).then((response) => {
                if (response.body.length > 0) {
                    cy.sendRequest(
                        'DELETE',
                        APIEndpoints.ENDPOINT_COLLECTION_DELETE.replace('%s', response.body[0].id)
                    )
                }
            })
        })


    })
})