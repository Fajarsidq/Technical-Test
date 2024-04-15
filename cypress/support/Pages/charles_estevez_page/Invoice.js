
const locator = require('../../Locators/charles_estevez_locator/Login-Locator')
const InvoiceLocator = require('../../Locators/charles_estevez_locator/Invoice-Locator')
const DasboardLocator = require('../../Locators/charles_estevez_locator/Dasboard-locator')
const staticText = require('../../Static_text/charles_estevez_staticText/static_text')

class invoicePage {

    async setupPage () {
        cy.viewport(window.screen.width, window.screen.height)
    }
    async fiturSearchBox () {
        this.setupPage()
        cy.xpath(InvoiceLocator.datatestid.clickNavbarInvoice).click({force: true})
        cy.xpath(InvoiceLocator.datatestid.clickSearchBox).type(staticText.data_static.searchBox, {force: true}, {timeout: 10000})
        cy.wait(4000)
    }
    
    async selectDate  () {
        this.setupPage()
        cy.xpath(InvoiceLocator.datatestid.clickReset).click({multiple: true},{force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.clickFromDate).click({multiple: true},{force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.selectFromDate).click({multiple: true},{force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.clickToDate).click({multiple: true},{force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.selectToDate).click({multiple: true},{force: true}, {timeout: 10000})
        cy.wait(4000)
    }

    async resetInput () {
        this.setupPage()
        cy.xpath(InvoiceLocator.datatestid.clickSearchBox).type(staticText.data_static.searchBox, {force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.clickReset).click({multiple: true},{force: true}, {timeout: 10000})
        cy.wait(4000)
    }


    async dropDownStatus () {
        this.setupPage()
        cy.xpath(InvoiceLocator.datatestid.clickAllStatus).click({force: true})
        cy.xpath(InvoiceLocator.datatestid.clickStatus).click({force: true})
        cy.wait(4000)
    }


    async sortZtoA () {
        this.setupPage()
        cy.contains(InvoiceLocator.datatestid.sortZtoA).click({force: true})
        cy.wait(4000)
    }

    async sortAtoZ () {
        this.setupPage()
        cy.contains(InvoiceLocator.datatestid.sortAtoZ).click({force: true})
        cy.wait(4000)
    }

    async sortOldtoNew () {
        this.setupPage()
        cy.contains(InvoiceLocator.datatestid.sortOldtoNew).click({force: true})
        cy.wait(4000)
    }

    async sortNewtoOld () {
        this.setupPage()
        cy.contains(InvoiceLocator.datatestid.sortNewtoOld).click({force: true})
        cy.wait(4000)
    }

    async sortHighToLow () {
        this.setupPage()
        cy.contains(InvoiceLocator.datatestid.sortHighToLow).click({force: true})
        cy.wait(4000)
    }

    async sortLowToHigh () {
        this.setupPage()
        cy.contains(InvoiceLocator.datatestid.sortLowToHigh).click({force: true})
        cy.wait(4000)
    }

    async sortPaidToUnpaid () {
        this.setupPage()
        cy.contains(InvoiceLocator.datatestid.back).click({force: true})
        cy.xpath(InvoiceLocator.datatestid.clickSearchBox).clear()
        cy.contains(InvoiceLocator.datatestid.sortPaidToUnpaid).click({force: true})
        cy.wait(4000)
    }

    async sortUnpaidToPaid () {
        this.setupPage()
        cy.contains(InvoiceLocator.datatestid.sortUnpaidToPaid).click({force: true})
        cy.wait(4000)
    }

    async paginationNavigation () {
        this.setupPage()
        cy.xpath(InvoiceLocator.datatestid.pagination1).click({force: true})
        cy.wait(4000)
    }

    async detailInvoiceNumber () {
        this.setupPage()
        cy.xpath(InvoiceLocator.datatestid.clickSearchBox).type(staticText.data_static.searchBox, {force: true})
        cy.xpath(InvoiceLocator.datatestid.detailInvoice).click({force: true})
        cy.wait(4000)
    }

    async setUnpaid () {
        this.setupPage()
        cy.xpath(InvoiceLocator.datatestid.clickSearchbox).type(staticText.data_static.searchBox2, {force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.clickAllStatus).click({multiple: true},{force: true})
        cy.xpath(InvoiceLocator.datatestid.Submit).click({multiple: true},{force: true})
        cy.xpath(InvoiceLocator.datatestid.invoiceSubmit).click({multiple: true},{force: true})
        cy.xpath(InvoiceLocator.datatestid.clickSetUnpaid).click({multiple: true},{force: true})
        cy.wait(4000)
    }

    async invalidSetUnpaid () {
        this.setupPage()
        cy.xpath(InvoiceLocator.datatestid.clickSearchbox).type(staticText.data_static.searchBox3, {force: true}, {timeout: 10000})
        cy.xpath(InvoiceLocator.datatestid.invalidSetUnpaid).click({multiple: true},{force: true})
        cy.xpath(InvoiceLocator.datatestid.clickSetUnpaid).click({multiple: true},{force: true})
        cy.wait(4000)
    }


    //Assertion

    async verifySetUnpaid() {
        cy.xpath(InvoiceLocator.datatestid.AssertionInvoice).should('contain','Invoices')
    }

    async verifyContentsOfTheSearchbox() {
        cy.xpath(InvoiceLocator.datatestid.AssertionSearchBox).should('contain','qwqwqw')
    }

    async verifyContentsOfDropdown() {
        cy.xpath(InvoiceLocator.datatestid.AssertionStatus).should('contain','Unpaid')
    }

    async verifyResetStatus() {
        cy.xpath(InvoiceLocator.datatestid.AssertionInvoice).should('contain','Invoices')
    }

    async verifyPage() {
        cy.xpath(InvoiceLocator.datatestid.AssertionInvoice).should('contain','Invoices')
    }

    async verifyDetailInvoice() {
        cy.xpath(InvoiceLocator.datatestid.AssertionDetail).should('contain','Overview')
    }
    async verifyUrlInvoice() {
        cy.url().should('eq', 'https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices')
    }


}


module.exports = new invoicePage()