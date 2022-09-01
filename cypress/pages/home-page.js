const IMG_FIRST = "(//figure//img)[1]"
const BTN_LIKE_IMG_RANDOM = "(//div//figure//button[@title='Like'])[%s]"
const IMG_PROFILE = "//img[contains(@alt,'Avatar')]"
const BTN_VIEW_PROFILE = "//a[text()='View profile']"
const BTN_EDIT_PROFILE = "a[href='https://unsplash.com/account']"
const BTN_DOWNLOAD_IMG = "(//div//figure//a[@title='Download photo'])[%s]"
const BTN_GOT_IT = "//button[text()='Got it']"
export const HomePage = {
    clickGotIt() {
        cy.xpath(BTN_GOT_IT).click()
    },
    clickFirstImage() {
        cy.xpath(IMG_FIRST).click()
    },
    clickProfileIcon() {
        cy.xpath(IMG_PROFILE).click()
    },
    clickViewProfile() {
        cy.xpath(BTN_VIEW_PROFILE).click()
    },
    clickEditProfile() {
        cy.get(BTN_EDIT_PROFILE).click()
    },
    clickLikeRandomPictures(number) {
        var arr = []
        while(arr.length < number) {
            var randomPicture = Math.floor(Math.random() * 10 + 1)
            if(arr.indexOf(randomPicture) === -1) arr.push(randomPicture)
        }
        var downloadRef = []
        var hrefLink
        for(let i = 0; i < arr.length; i ++) {
            
            cy.xpath(BTN_LIKE_IMG_RANDOM.replace("%s", arr[i])).click({force: true}) 
            hrefLink = cy.xpath(BTN_DOWNLOAD_IMG.replace("%s",arr[i]))
            .invoke('attr', 'href')
            .then(href => {
                downloadRef.push(cy.wrap(href).as('link'))
            })
            cy.log(downloadRef[i])     
        }   
        return downloadRef
    }
}