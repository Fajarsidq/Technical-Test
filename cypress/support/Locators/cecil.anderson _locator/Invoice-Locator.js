module.exports = {
    datatestid: {
        clickNavbarInvoice: '//a[@class=" margin-left-m"]',
        clickSearchBox: '//input[@id="Input_SearchKeyword"]',
        clickFromDate: '#b5-Input > .input-date > .input',
        clickToDate: '#b7-Input > .input-date > .input',
        clickAllStatus: '//div[@class="dropdown-display-content"]',
        clickStatus: '//div[@class="dropdown-popup-row"]//span[contains(text(),"paid")]',
        clickReset: '(//button[normalize-space()="Reset"])[1]',
        sortZtoA: 'Invoice',
        sortAtoZ: 'Invoice',
        sortNewtoOld: 'Period',
        sortOldtoNew: 'Period',
        sortHighToLow: 'Amount',
        sortLowToHigh: 'Amount',
        sortPaidToUnpaid: 'Status',
        sortUnpaidToPaid: 'Status',
        pagination1 : '//*[@aria-label="go to page 3"]',
        detailInvoice : '//span[normalize-space()="101009"]',
        back : '//span[@class="padding-left-xs"]',
        buttonRequest:'//div[@id="ListInvoices_NewInvoice"]//button[@type="button"]',
        inputInvoice: '//input[@id="Input_InvoiceNumber"]',
        inputStartDate : '//input[@id="Input_PeriodStartDate"]',
        inputEndDate : '//input[@id="Input_PeriodEndDate"]',
        inputAmount : '//input[@id="Input_Amount"]',
        clickSubmit : '//button[@type="submit"]',
        backToMenu : '//div[@id="b1-b2-ApplicationTitleWrapper"]//span[contains(text(),"Claim Portal")]',
        selectFromDate: '(//span[@class="flatpickr-day"])[7]',
        clickFromDate : '//div[@id="ListInvoices_StartInput"]//input[2]',
        clickToDate: '//input[@class="form-control OSFillParent input"]',
        selectToDate: '(//span[@aria-label="April 14, 2024"][normalize-space()="14"])[2]',
        
        //Assertion
        
        AssertionErorrReq : '//span[@class="validation-message"]',
        AssertionDetail : '//span[@class="heading4 flex1 margin-bottom-m"]',
        AssertionInvoice : '//div[@id="b1-Title"]',
        AssertionStatus: '//div[@class="dropdown-display-content"]//span[contains(text(),"Unpaid")]',
        AssertionSearchBox : '//span[normalize-space()="qwqwqw"]',
        
    }
}
