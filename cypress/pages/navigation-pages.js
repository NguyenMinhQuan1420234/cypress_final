const LBL_FULLNAME = "div[class='dJnu9 CjK9V Fu4vG lP2EO']"

export const NavigationPage = {
    getFullname() {
        return cy.get(LBL_FULLNAME)
    }
}