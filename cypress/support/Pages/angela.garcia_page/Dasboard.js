
const locator = require('../../Locators/angela.garcia_locator/Login-Locator')
const DasboardLocator = require('../../Locators/angela.garcia_locator/Dasboard-locator')
const staticText = require('../../Static_text/angela.garcia_staticText/static_text')

class dasboardPage {

    async setupPage () {
        cy.viewport(window.screen.width, window.screen.height)
    }

    async footerTermsNconditions () {
        this.setupPage()
        cy.xpath(DasboardLocator.datatestid.footer_TermsAndConditions).click({force: true})
        cy.wait(3000)
    }

    async footerPrivacyPolicy () {
        this.setupPage()
        cy.xpath(DasboardLocator.datatestid.footer_PrivacyPolicy).click({force: true})
        cy.wait(3000)
    }

    async footerCookies () {
        this.setupPage()
        cy.xpath(DasboardLocator.datatestid.footer_Cookies).click({force: true})
        cy.wait(3000)
    }

    async showMonthly () {
        this.setupPage()
        cy.xpath(DasboardLocator.datatestid.back).click({force: true})
        cy.xpath(DasboardLocator.datatestid.show_monthly).click({force: true})
        cy.wait(3000)
    }

    async DetailProfile () {
        this.setupPage()
        cy.xpath(DasboardLocator.datatestid.Click_UserProfile).click({force: true})
        cy.xpath(DasboardLocator.datatestid.Click_Profile).click({force: true}, {timeout: 10000})
        cy.wait(3000)

    }

    async logout () {this.setupPage()
        cy.xpath(DasboardLocator.datatestid.Click_UserProfile).click({force: true}, {timeout: 10000})
        cy.xpath(DasboardLocator.datatestid.Click_logout).click({force: true}, {timeout: 10000})
        cy.wait(3000)
    }

    //Assertion

    async verifyFooter() {
        cy.xpath(DasboardLocator.datatestid.assertion_footer).should('contain','Feature not implemented. Create your own action or navigate to a diferent screen.')
    }

    async verifyDetailProfile() {
        cy.xpath(DasboardLocator.datatestid.assertion_dasboard).should('contain','User profile')
    }

    async verifyShowMonthly() {
        cy.xpath(DasboardLocator.datatestid.assertion_dasboard).should('contain','Dashboard')
    }

    async verifyLogout() {
        cy.xpath(DasboardLocator.datatestid.assertion_login).should('contain','Log in to your account')
    }
}


module.exports = new dasboardPage()