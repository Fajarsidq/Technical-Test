const InvoicePage = require('../../support/Pages/charles_estevez_page/Invoice')
const LoginPage = require('../../support/Pages/charles_estevez_page/Login')
const DasboardPage = require('../../support/Pages/charles_estevez_page/Dasboard')



describe('INVOICE', () => {

    before(() => {
        LoginPage.loginWithValidCredential()
        LoginPage.verifyUserSuccessfullyLogin()
})
    it('Verify user tries to find the correct invoice number on the searchbox feature', () => {

        InvoicePage.fiturSearchBox()
        InvoicePage.verifyContentsOfTheSearchbox()
    })

    it('Verify user tries to search for data based on status on the status filter feature', () => {
        InvoicePage.dropDownStatus()
        InvoicePage.verifyContentsOfDropdown()
    })

    it('Verify the user resets the search data that was previously filled in', () => {
        InvoicePage.resetInput()
        InvoicePage.verifyResetStatus()
    })

    it('Verify user sorts Invoice number data based on Z to A', () => {
        InvoicePage.sortZtoA()
        InvoicePage.verifyPage()
    })

    it('Verify user sorts Invoice number data based on A to Z', () => {
        InvoicePage.sortAtoZ()
        InvoicePage.verifyPage()

    })

    it('Verify user sorts period  data based on Old to New', () => {
        InvoicePage.sortOldtoNew()
        InvoicePage.verifyPage()

    })

    it('Verify user sorts period  data based on New to Old', () => {
        InvoicePage.sortNewtoOld()
        InvoicePage.verifyPage()

    })

    it('Verify user sorts Amount  data based on High to Low', () => {
        InvoicePage.sortHighToLow()
        InvoicePage.verifyPage()

    })

    it('Verify user sorts Amount  data based on Low to High', () => {
        InvoicePage.sortLowToHigh()
        InvoicePage.verifyPage()        
    })

    it('Verify user tries to view Invoice details', () => {
        InvoicePage.detailInvoiceNumber()
        InvoicePage.verifyDetailInvoice()        
    })

    it('Verify user sorts status data based on paid to unpaid', () => {
        InvoicePage.sortPaidToUnpaid()
        InvoicePage.verifyPage()        
    })
    
    it('Verify user sorts status data based on Unpaid to Paid', () => {
        InvoicePage.sortUnpaidToPaid()
        InvoicePage.verifyPage()        
    })

    it('Verify user tries the pagination feature', () => {
        InvoicePage.paginationNavigation()
        InvoicePage.verifyPage()        
    })

    after(() => {
        DasboardPage.logout() 
})


})
