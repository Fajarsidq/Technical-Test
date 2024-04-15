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
        detailInvoice : '//span[normalize-space()="qwqwqw"]',
        back : 'Back',
        selectFromDate: '(//span[@class="flatpickr-day"])[7]',
        clickFromDate : '//div[@id="ListInvoices_StartInput"]//input[2]',
        clickToDate: '//input[@class="form-control OSFillParent input"]',
        selectToDate: '(//span[@aria-label="April 14, 2024"][normalize-space()="14"])[2]',
        clickStatusSubmit: '//div[@class="dropdown-popup-row"]//span[contains(text(),"Submit")]',
        invoiceSubmit:'//tbody/tr[1]/td[1]/a[1]/span[1]',
        clickSetUnpaid: '(//button[normalize-space()="Set Unpaid"])[1]',
        clickSearchbox: '//input[@id="Input_SearchKeyword"]',
        Submit : '//div[@class="dropdown-list"]//div[4]',
        invalidSetUnpaid: '//span[normalize-space()="wq"]',

    //Assertion
        AssertionDetail : '//span[@class="heading4 flex1 margin-bottom-m"]',
        AssertionStatus: '//div[@class="dropdown-display-content"]//span[contains(text(),"Unpaid")]',
        AssertionSearchBox : '//span[normalize-space()="qwqwqw"]',
        AssertionInvoice : '//div[@id="b1-Title"]',
        
        
    }
}