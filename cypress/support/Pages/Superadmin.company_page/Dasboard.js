
const locator = require('../../Locators/Superadmin.company_locator/Login-Locator')
const DasboardLocator = require('../../Locators/Superadmin.company_locator/Dasboard-locator')
const staticText = require('../../Static_text/Superadmin.company_staticText/static_text')

class dasboardPage {

    async footerTermsNconditions () {
        cy.xpath(DasboardLocator.datatestid.footer_TermsAndConditions).click({force: true})
        cy.wait(3000)
    }

    async footerPrivacyPolicy () {
        cy.xpath(DasboardLocator.datatestid.footer_PrivacyPolicy).click({force: true})
        cy.wait(3000)
    }

    async footerCookies () {
        cy.xpath(DasboardLocator.datatestid.footer_Cookies).click({force: true})
        cy.wait(3000)
    }

    async showMonthly () {
        cy.xpath(DasboardLocator.datatestid.back).click({force: true})
        cy.xpath(DasboardLocator.datatestid.show_monthly).click({force: true})
        cy.wait(3000)
    }

    async DetailProfile () {
        cy.xpath(DasboardLocator.datatestid.Click_UserProfile).click({force: true})
        cy.xpath(DasboardLocator.datatestid.Click_Profile).click({force: true}, {timeout: 10000})
        cy.wait(3000)

    }

    async logout () {
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