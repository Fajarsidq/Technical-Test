
const locator = require('../../Locators/Superadmin.company_locator/Login-Locator')
const InvoiceLocator = require('../../Locators/Superadmin.company_locator/Invoice-Locator')
const DasboardLocator = require('../../Locators/Superadmin.company_locator/Dasboard-locator')
const staticText = require('../../Static_text/Superadmin.company_staticText/static_text')

class invoicePage {

    async setupPage () {
        cy.viewport(window.screen.width, window.screen.height)
    }
    async fiturSearchBox () {
        this.setupPage()
        cy.xpath(InvoiceLocator.datatestid.click_NavbarInvoice).click({force: true})
        cy.xpath(InvoiceLocator.datatestid.click_SearchBox).type(staticText.data_static.searchBox, {force: true}, {timeout: 10000})
        cy.wait(4000)
    }

    async selectDate  () {
        this.setupPage()
        cy.xpath(InvoiceLocator.datatestid.click_reset).click({multiple: true},{force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.clickFromDate).click({multiple: true},{force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.selectFromDate).click({multiple: true},{force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.clickToDate).click({multiple: true},{force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.selectToDate).click({multiple: true},{force: true}, {timeout: 10000})
        cy.wait(4000)
    }

    async resetInput () {
        this.setupPage()
        cy.xpath(InvoiceLocator.datatestid.click_SearchBox).type(staticText.data_static.searchBox, {force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.click_reset).click({multiple: true},{force: true}, {timeout: 10000})
        cy.wait(4000)
    }

    async dropDownStatus () {
        this.setupPage()
        cy.xpath(InvoiceLocator.datatestid.click_allStatus).click({force: true})
        cy.xpath(InvoiceLocator.datatestid.click_status).click({force: true})
        cy.wait(4000)
    }


    async sortZtoA () {
        this.setupPage()
        cy.contains(InvoiceLocator.datatestid.sort_ZtoA).click({force: true})
        cy.wait(4000)
    }

    async sortAtoZ () {
        this.setupPage()
        cy.contains(InvoiceLocator.datatestid.sort_AtoZ).click({force: true})
        cy.wait(4000)
    }

    async sortOldtoNew () {
        this.setupPage()
        cy.contains(InvoiceLocator.datatestid.sort_OldtoNew).click({force: true})
        cy.wait(4000)
    }

    async sortNewtoOld () {
        this.setupPage()
        cy.contains(InvoiceLocator.datatestid.sort_NewtoOld).click({force: true})
        cy.wait(4000)
    }

    async sortHighToLow () {
        this.setupPage()
        cy.contains(InvoiceLocator.datatestid.sort_HighToLow).click({force: true})
        cy.wait(4000)
    }

    async sortLowToHigh () {
        this.setupPage()
        cy.contains(InvoiceLocator.datatestid.sort_LowToHigh).click({force: true})
        cy.wait(4000)
    }

    async sortPaidToUnpaid () {
        this.setupPage()
        cy.xpath(InvoiceLocator.datatestid.back).click({force: true})
        cy.xpath(InvoiceLocator.datatestid.click_SearchBox).clear()
        cy.contains(InvoiceLocator.datatestid.sort_PaidToUnpaid).click({force: true})
        cy.wait(4000)
    }

    async sortUnpaidToPaid () {
        this.setupPage()
        cy.contains(InvoiceLocator.datatestid.sort_UnpaidToPaid).click({force: true})
        cy.wait(4000)
    }

    async paginationNavigation () {
        this.setupPage()
        cy.xpath(InvoiceLocator.datatestid.pagination_1).click({force: true})
        cy.wait(4000)
    }

    async detailInvoiceNumber () {
        this.setupPage()
        cy.xpath(InvoiceLocator.datatestid.click_SearchBox).type(staticText.data_static.searchBox, {force: true})
        cy.xpath(InvoiceLocator.datatestid.detail_Invoice).click({force: true})
        cy.wait(4000)
    }
    

    //Assertion

    async verifyContentsOfTheSearchbox() {
        cy.xpath(InvoiceLocator.datatestid.Assertion_searchBox).should('contain','IDN0005')
    }

    async verifyContentsOfDropdown() {
        cy.xpath(InvoiceLocator.datatestid.Assertion_status).should('contain','Unpaid')
    }

    async verifyResetStatus() {
        cy.xpath(InvoiceLocator.datatestid.Assertion_invoice).should('contain','Invoices')
    }

    async verifyPage() {
        cy.xpath(InvoiceLocator.datatestid.Assertion_invoice).should('contain','Invoices')
    }

    async verifyDetailInvoice() {
        cy.xpath(InvoiceLocator.datatestid.Assertion_detail).should('contain','Overview')
    }
    async verifyUrlInvoice() {
        cy.url().should('eq', 'https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices')
    }


}


module.exports = new invoicePage()