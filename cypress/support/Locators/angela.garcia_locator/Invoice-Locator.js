module.exports = {
    datatestid: {
        clickNavbarInvoice: '//a[@class=" margin-left-m"]',
        clickSearchBox: '//input[@id="Input_SearchKeyword"]',
        clickFromDate: '#b5-Input > .input-date > .input',
        clickToDate: '#b7-Input > .input-date > .input',
        clickAllStatus: '//div[@class="dropdown-display-content"]',
        clickStatus: '//div[@class="dropdown-popup-row"]//span[contains(text(),"Unpaid")]',
        clickReset: '(//button[normalize-space()="Reset"])[1]',
        sortZtoA: 'Invoice',
        sortAtoZ: 'Invoice',
        sortNewtoOld: 'Period',
        sortOldtoNew: 'Period',
        sortHighToLow: 'Amount',
        sortLowToHigh: 'Amount',
        sortPaidToUnpaid: 'Status',
        sortUnpaidToPaid: 'Status',
        pagination1 : '//div[@class="display-flex"]//button[@aria-label="page 1"]',
        detailInvoice : '//span[normalize-space()="IDN0005"]',
        back : '//span[@class="padding-left-xs"]',
        selectFromDate: '(//span[@class="flatpickr-day"])[7]',
        clickFromDate : '//div[@id="ListInvoices_StartInput"]//input[2]',
        clickToDate: '//input[@class="form-control OSFillParent input"]',
        selectToDate: '(//span[@aria-label="April 14, 2024"][normalize-space()="14"])[2]',
        InvoiceSelect: '(//span[contains(text(),"101003")])[1]',
        buttonPayBill : '(//button[normalize-space()="Pay bill"])[1]',
        inputNameOnCard: '//input[@id="Input_HolderName"]',
        cardNumber: '(//input[@id="Input_CardNumber"])[1]',
        clickMM : '//span[normalize-space()="MM"]',
        selectMM : '(//div[@class="dropdown-popup-row"])[7]',
        clickYY : '//div[@id="Input_ExpYear"]//div[@class="dropdown-display-content"]',
        selectYY : '//span[normalize-space()="2028"]',
        inputCVV : '//input[@id="Input_CVV"]',
        buttonPay : '//button[@id="CreditCardForm_Btn"]',

    //Assertion
        AssertionSearchBox : '//span[normalize-space()="IDN0005"]',
        AssertionInvoice : '//div[@id="b1-Title"]',
        AssertionStatus: '//div[@class="dropdown-display-content"]//span[contains(text(),"Unpaid")]',
        AssertionDetail : '//span[@class="heading4 flex1 margin-bottom-m"]',
        assertionInvalidName : '(//span[@class="validation-message"])[1]'
        
        
    }
}
