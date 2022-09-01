const BTN_FOLLOW = "//a[contains(text(),'View profile')]/preceding-sibling::div//button"
const IMG_ICON = "(//div[@data-test='photos-route']//img)[1]"
const BTN_DOWNLOAD = "//span[text()='Download']/.."

export const PhotoDetailPage = {
    hoverOnImageIcon() {
        cy.hover(IMG_ICON)
    },
    clickFollowButton() {
        cy.xpath(BTN_FOLLOW).click()
    },
    getIcon() {
        return cy.xpath(BTN_FOLLOW)
    },
    clickDownloadBtn() {
        cy.xpath(BTN_DOWNLOAD).click()
    },
    getDownLoadLnk() {
        return cy.xpath(BTN_DOWNLOAD).invoke('attr', 'href')
    }
}