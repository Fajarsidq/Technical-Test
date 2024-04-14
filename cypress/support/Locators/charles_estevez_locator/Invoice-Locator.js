module.exports = {
    datatestid: {
        click_NavbarInvoice: '//a[@class=" margin-left-m"]',
        click_SearchBox: '//input[@id="Input_SearchKeyword"]',
        Assertion_searchBox : '//span[normalize-space()="qwqwqw"]',
        click_fromDate: '#b5-Input > .input-date > .input',
        click_toDate: '#b7-Input > .input-date > .input',
        click_allStatus: '//div[@class="dropdown-display-content"]',
        click_status: '//div[@class="dropdown-popup-row"]//span[contains(text(),"Unpaid")]',
        Assertion_status: '//div[@class="dropdown-display-content"]//span[contains(text(),"Unpaid")]',
        click_reset: '(//button[normalize-space()="Reset"])[1]',
        Assertion_invoice : '//div[@id="b1-Title"]',
        sort_ZtoA: 'Invoice',
        sort_AtoZ: 'Invoice',
        sort_NewtoOld: 'Period',
        sort_OldtoNew: 'Period',
        sort_HighToLow: 'Amount',
        sort_LowToHigh: 'Amount',
        sort_PaidToUnpaid: 'Status',
        sort_UnpaidToPaid: 'Status',
        pagination_1 : '//div[@class="display-flex"]//button[@aria-label="page 1"]',
        detail_Invoice : '//span[normalize-space()="qwqwqw"]',
        Assertion_detail : '//span[@class="heading4 flex1 margin-bottom-m"]',
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
        invalidSetUnpaid: '//span[normalize-space()="wq"]'


    }
}