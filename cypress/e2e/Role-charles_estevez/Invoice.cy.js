const InvoicePage = require('../../support/Pages/charles_estevez_page/Invoice')
const LoginPage = require('../../support/Pages/charles_estevez_page/Login')
const DasboardPage = require('../../support/Pages/charles_estevez_page/Dasboard')



describe('INVOICE charles.estevez (HC)', () => {

    before(() => {
    LoginPage.vistToWebsite()
    LoginPage.LoginWithValidCredentiantial()


})
    it('Verify user tries to find the correct invoice number on the searchbox feature', () => {

        InvoicePage.fiturSearchBox()
    })

    it('Verify user tries to search for data based on status on the status filter feature', () => {
        InvoicePage.dropDownStatus()
    })

    it('Verify the user resets the search data that was previously filled in', () => {
        InvoicePage.resetInput()
    })

    it('Verify user sorts Invoice number data based on Z to A', () => {
        InvoicePage.sortZtoA()
    })

    it('Verify user sorts Invoice number data based on A to Z', () => {
        InvoicePage.sortAtoZ()
    })

    it('Verify user sorts period  data based on Old to New', () => {
        InvoicePage.sortOldtoNew()
    })

    it('Verify user sorts period  data based on New to Old', () => {
        InvoicePage.sortNewtoOld()
    })

    it('Verify user sorts Amount  data based on High to Low', () => {
        InvoicePage.sortHighToLow()
    })

    it('Verify user sorts Amount  data based on Low to High', () => {
        InvoicePage.sortLowToHigh()
        DasboardPage.logout()        
    })

})
