const InvoicePage = require('../../support/Pages/angela.garcia_page/Invoice')
const LoginPage = require('../../support/Pages/angela.garcia_page/Login')
const DasboardPage = require('../../support/Pages/angela.garcia_page/Dasboard')



describe('INVOICE', () => {

    before(() => {
        LoginPage.loginWithValidCredential()
        LoginPage.verifyUserSuccessfullyLogin()
})
    it('Verify user tries to find the correct invoice number on the searchbox feature', () => {

        InvoicePage.fiturSearchBox()
        InvoicePage.verifyContentsOfTheSearchbox()
        InvoicePage.verifyUrlInvoice()
    })

    it('Verify user tries to search for data based on the period date on the search date feature.', () => {
        InvoicePage.selectDate()
        InvoicePage.verifyUrlInvoice()
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

    it('Verify user in Sorting Periods from Oldest to Latest', () => {
        InvoicePage.sortOldtoNew()
        InvoicePage.verifyPage()

    })

    it('Verify user in Sorting Periods from Latest to Oldest', () => {
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

    it('Verify user tries to show Invoice details', () => {
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

    it('verify user creates pay bill', () => {
        InvoicePage.addPayBill()
        InvoicePage.verifyPayBill()        
    })

    it('user verification create payment bill fill name on card with number', () => {
        InvoicePage.addPayBillfillwithNumber()
        InvoicePage.verifyPayBill()        
    })

    it('verify user creates a payment bill fills in the CVV number that does not match the card number.', () => {
        InvoicePage.addPayBillwithInvalidCVV()
        InvoicePage.verifyPayBill()        
    })

    it('verify user creates pay bill fills in name on card with single name', () => {
        InvoicePage.addPayBillwithInvalidNameOnCard()
        InvoicePage.verifyPayBillInvalidName()        
    })


    after(() => {
        DasboardPage.logout() 
})


})
