    const locator = require('../../Locators/angela.garcia_locator/Login-Locator')
    const staticText = require('../../Static_text/angela.garcia_staticText/static_text')

    class loginPage {
        async visitToUrl () {
            cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal',{failOnStatusCode: false})
            cy.viewport(window.screen.width, window.screen.height)
        }

        async userLogin(username, password) {
            this.visitToUrl()
            cy.xpath(locator.datatestid.usernameInput).type(username).should('be.visible', {timeout: 10000})
            cy.xpath(locator.datatestid.passwordInput).type(password).should('be.visible', {timeout: 10000})
            cy.xpath(locator.datatestid.loginButton).click({force: true})
            cy.wait(3000)
        }

        async userLoginUsername(username) {
            this.visitToUrl()
            cy.xpath(locator.datatestid.usernameInput).type(username).should('be.visible', {timeout: 10000})
            cy.xpath(locator.datatestid.loginButton).click({force: true})
            cy.wait(3000)
        }

        async loginWithValidCredential() {
            var validUsername = staticText.data_static.userName
            var validPassword = staticText.data_static.password
            this.userLogin(validUsername, validPassword)
        }

        async loginWithInvalidCredential() {
            var validUsername = staticText.data_static.invalidUserName
            var validPassword = staticText.data_static.invalidpassword
            this.userLogin(validUsername, validPassword)
        }

        async loginWithOneInvalidData () {
            var invalidUsername = staticText.data_static.invalidUserName
            var validPassword = staticText.data_static.password
            this.userLogin(invalidUsername, validPassword)
        }
        
        async loginWithoutPassword () {
            var validUsername = staticText.data_static.userName
            this.userLoginUsername(validUsername)
        }
        
        async loginWithoutUsernameAndPassword() {
            cy.xpath(locator.datatestid.loginButton).click({force: true})
            cy.wait(3000)
        }
        
        // Assertion 
        async verifyEmptyFieldErrorMessageAppears() {
            cy.xpath(locator.datatestid.AssertionReq).should('contain','This field is required.')
        }
        
        async verifyUserSuccessfullyLogin() {
            cy.url().should('eq', 'https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Dashboard')
        }
        async verifyLogin() {
        cy.xpath(locator.datatestid.AssertionLogin).should('contain','Log in to your account')
        }
}

module.exports = new loginPage()