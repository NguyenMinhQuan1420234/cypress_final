const LNK_SELECT_COLLECTION = (collectionName) => {
    return `//span[text()='${collectionName}']`
}

export const AddToCollectionPage = {
    selectColection(collectionName) {
        cy.xpath(LNK_SELECT_COLLECTION(collectionName)).click()
    }

}