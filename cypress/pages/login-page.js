const TXT_USERNAME = "#user_email"
const TXT_PASSWORD = "#user_password"
const BTN_LOGIN = "input[value='Login']"

export const LoginPage = {
    inputUsername(username){
        cy.get(TXT_USERNAME).type(username)
    },
    inputPassword(password){
        cy.get(TXT_PASSWORD).type(password)
    },
    clickLoginButton(){
        cy.get(BTN_LOGIN).click()
    }
}