const LNK_PHOTO = "(//a[contains(@href, 'photos')])[1]"
const BTN_ADD_TO_COLLECTION = "(//button[@title='Add to collection'])[1]"
const LNK_PHOTOS = "//figure[@itemprop='image']"

export const CollectionInformationPage = {
    clickAddToCollectionBtn() {
        cy.hover(LNK_PHOTO)
        cy.xpath(BTN_ADD_TO_COLLECTION).click()
    },
    getTotalPhoto() {
        return cy.xpath(LNK_PHOTOS).its('length')
    }
}