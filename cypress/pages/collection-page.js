const LBL_COLLECTION = "//a[contains(@href, 'collection')]//div[text()='%s']"

export const CollectionPage = {
    clickToCollection(collection) {
        var collectionName = LBL_COLLECTION.replace('%s', collection)
        cy.log(collectionName)
        cy.xpath(collectionName).click()
    }
}