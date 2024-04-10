
const locator = require('../../Locators/charles_estevez_locator/Login-Locator')
const InvoiceLocator = require('../../Locators/charles_estevez_locator/Invoice-Locator')
const DasboardLocator = require('../../Locators/charles_estevez_locator/Dasboard-locator')
const staticText = require('../../Static_text/charles_estevez_statictText/static_text')

class invoicePage {

    async fiturSearchBox () {
        cy.viewport(window.screen.width, window.screen.height)
        cy.xpath(InvoiceLocator.datatestid.click_NavbarInvoice).click({force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.click_SearchBox).type(staticText.data_static.searchBox, {force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.Assertion_searchBox).should('contain','qwqwqw')
        cy.wait(4000)
    }

    async dropDownStatus () {
        cy.viewport(window.screen.width, window.screen.height)
        cy.xpath(InvoiceLocator.datatestid.click_allStatus).click({force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.click_status).click({force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.Assertion_status).should('contain','Unpaid')
        cy.wait(4000)
    }

    async resetInput () {
        cy.viewport(window.screen.width, window.screen.height)
        cy.xpath(InvoiceLocator.datatestid.click_reset).click({force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.Assertion_reset).should('contain','Invoices')
        cy.wait(4000)
    }

    async sortZtoA () {
        cy.viewport(window.screen.width, window.screen.height)
        cy.contains(InvoiceLocator.datatestid.sort_ZtoA).click({force: true}, {timeout: 10000})
        cy.wait(4000)
    }

    async sortAtoZ () {
        cy.viewport(window.screen.width, window.screen.height)
        cy.contains(InvoiceLocator.datatestid.sort_AtoZ).click({force: true}, {timeout: 10000})
        cy.wait(4000)
    }

    async sortOldtoNew () {
        cy.viewport(window.screen.width, window.screen.height)
        cy.contains(InvoiceLocator.datatestid.sort_OldtoNew).click({force: true}, {timeout: 10000})
        cy.wait(4000)
    }

    async sortNewtoOld () {
        cy.viewport(window.screen.width, window.screen.height)
        cy.contains(InvoiceLocator.datatestid.sort_NewtoOld).click({force: true}, {timeout: 10000})
        cy.wait(4000)
    }

    async sortHighToLow () {
        cy.viewport(window.screen.width, window.screen.height)
        cy.contains(InvoiceLocator.datatestid.sort_HighToLow).click({force: true}, {timeout: 10000})
        cy.wait(4000)
    }

    async sortLowToHigh () {
        cy.viewport(window.screen.width, window.screen.height)
        cy.contains(InvoiceLocator.datatestid.sort_LowToHigh).click({force: true}, {timeout: 10000})
        cy.wait(4000)
    }

    async logout () {
        cy.xpath(DasboardLocator.datatestid.Click_UserProfile).click({force: true}, {timeout: 10000})
        cy.xpath(DasboardLocator.datatestid.Click_logout).click({force: true}, {timeout: 10000})
        cy.xpath(DasboardLocator.datatestid.assertion_login).should('contain','Log in to your account')
        cy.wait(3000)
    }


}


module.exports = new invoicePage()