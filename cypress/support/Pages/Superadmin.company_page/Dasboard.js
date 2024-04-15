
const locator = require('../../Locators/Superadmin.company_locator/Login-Locator')
const DasboardLocator = require('../../Locators/Superadmin.company_locator/Dasboard-locator')
const staticText = require('../../Static_text/Superadmin.company_staticText/static_text')

class dasboardPage {

    async setupPage () {
        cy.viewport(window.screen.width, window.screen.height)
    }

    async footerTermsNconditions () {
        this.setupPage()
        cy.xpath(DasboardLocator.datatestid.footerTermsAndConditions).click({force: true})
        cy.wait(3000)
    }

    async footerPrivacyPolicy () {
        this.setupPage()
        cy.xpath(DasboardLocator.datatestid.footerPrivacyPolicy).click({force: true})
        cy.wait(3000)
    }

    async footerCookies () {
        this.setupPage()
        cy.xpath(DasboardLocator.datatestid.footerCookies).click({force: true})
        cy.wait(3000)
    }

    async showMonthly () {
        this.setupPage()
        cy.xpath(DasboardLocator.datatestid.back).click({force: true})
        cy.xpath(DasboardLocator.datatestid.showMonthly).click({force: true})
        cy.wait(3000)
    }

    async DetailProfile () {
        this.setupPage()
        cy.xpath(DasboardLocator.datatestid.ClickUserProfile).click({force: true})
        cy.xpath(DasboardLocator.datatestid.ClickProfile).click({force: true}, {timeout: 10000})
        cy.wait(3000)

    }

    async logout () {this.setupPage()
        cy.xpath(DasboardLocator.datatestid.ClickUserProfile).click({force: true}, {timeout: 10000})
        cy.xpath(DasboardLocator.datatestid.ClickLogout).click({force: true}, {timeout: 10000})
        cy.wait(3000)
    }

    //Assertion

    async verifyFooter() {
        cy.xpath(DasboardLocator.datatestid.assertionFooter).should('contain','Feature not implemented. Create your own action or navigate to a diferent screen.')
    }

    async verifyDetailProfile() {
        cy.xpath(DasboardLocator.datatestid.assertionDasboard).should('contain','User profile')
    }

    async verifyShowMonthly() {
        cy.xpath(DasboardLocator.datatestid.assertionDasboard).should('contain','Dashboard')
    }

    async verifyLogout() {
        cy.xpath(DasboardLocator.datatestid.assertionLogin).should('contain','Log in to your account')
    }
}


module.exports = new dasboardPage()