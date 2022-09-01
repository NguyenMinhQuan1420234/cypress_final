import { APIEndpoints } from "../constants/api-endpoints"

const TXT_FIRSTNAME = '#user_first_name'
const TXT_LASTNAME = '#user_last_name'
const TXT_EMAIL = '#user_email'
const TXT_USERNAME = '#user_username'
const TXT_LOCATION = '#user_location'
const TXT_SITE = '#user_url'
const TXT_BIO = '#user_bio'
const TXT_INTERESTS = '#user_interests_tagsinput'
const TXT_INSTAGRAM = '#user_instagram_username'
const TXT_TWITTER = '#twitter_username'
const TXT_DONATION = '#user_paypal'
const BTN_UPDATE = 'input[value="Update account"]'
const LBL_USERNAME = "(//div[@data-test='photos-route']//a)[2]"
// const LBL_USERNAME = '//div[@class="help-block text-secondary"]/p/strong'


export const EditPage = {
    inputFirstName(text) {
        cy.get(TXT_FIRSTNAME).clear().type(text)
    },
    inputLastName(text) {
        cy.get(TXT_LASTNAME).clear().type(text)
    },
    inputEmail(text) {
        cy.get(TXT_EMAIL).clear().type(text)
    },
    inputUsername(text) {
        cy.get(TXT_USERNAME).clear().type(text)
    },
    inputLocation(text) {
        cy.get(TXT_LOCATION).clear().type(text)
    },
    inputSite(text) {
        cy.get(TXT_SITE).clear().type(text)
    },
    inputBio(text) {
        cy.get(TXT_BIO).clear().type(text)
    },
    inputInterests(text) {
        cy.get(TXT_INTERESTS).type(text)
    },
    inputInstagram(text) {
        cy.get(TXT_INSTAGRAM).clear().type(text)
    },
    inputTwitter(text) {
        cy.get(TXT_TWITTER).clear().type(text)
    },
    inputDonation(text) {
        cy.get(TXT_DONATION).clear().type(text)
    },
    clickUpdateButton() {
        cy.get(BTN_UPDATE).click()
    },
    getUsernameOfAuthor() {
        return cy.xpath(LBL_USERNAME)
    }
}