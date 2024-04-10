
const locator = require('../../Locators/charles_estevez_locator/Login-Locator')
const DasboardLocator = require('../../Locators/charles_estevez_locator/Dasboard-locator')
const staticText = require('../../Static_text/charles_estevez_statictText/static_text')

class dasboardPage {

    async footerTermsNconditions () {
        cy.xpath(DasboardLocator.datatestid.footer_TermsAndConditions).click({force: true}, {timeout: 10000})
        cy.xpath(DasboardLocator.datatestid.assertion_footer).should('contain','Feature not implemented. Create your own action or navigate to a diferent screen.')
        cy.wait(3000)
    }

    async footerPrivacyPolicy () {
        cy.xpath(DasboardLocator.datatestid.footer_PrivacyPolicy).click({force: true}, {timeout: 10000})
        cy.xpath(DasboardLocator.datatestid.assertion_footer).should('contain','Feature not implemented. Create your own action or navigate to a diferent screen.')
        cy.wait(3000)
    }

    async footerCookies () {
        cy.xpath(DasboardLocator.datatestid.footer_Cookies).click({force: true}, {timeout: 10000})
        cy.xpath(DasboardLocator.datatestid.assertion_footer).should('contain','Feature not implemented. Create your own action or navigate to a diferent screen.')
        cy.wait(3000)
    }

    async DetailProfile () {
        cy.xpath(DasboardLocator.datatestid.Click_UserProfile).click({force: true}, {timeout: 10000})
        cy.xpath(DasboardLocator.datatestid.Click_Profile).click({force: true}, {timeout: 10000})
        cy.xpath(DasboardLocator.datatestid.assertion_dasboard).should('contain','Dashboard')
        cy.wait(3000)

    }

    async logout () {
        cy.xpath(DasboardLocator.datatestid.Click_UserProfile).click({force: true}, {timeout: 10000})
        cy.xpath(DasboardLocator.datatestid.Click_logout).click({force: true}, {timeout: 10000})
        cy.xpath(DasboardLocator.datatestid.assertion_login).should('contain','Log in to your account')
        cy.wait(3000)
    }
}


module.exports = new dasboardPage()