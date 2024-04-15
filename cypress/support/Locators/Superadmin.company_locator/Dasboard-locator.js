module.exports = {
    datatestid: {
        footerTermsAndConditions: '//a[normalize-space()="Terms and Conditions"]',
        footerPrivacyPolicy: '//a[normalize-space()="Privacy Policy"]',
        footerCookies : '//a[normalize-space()="Cookies"]',
        ClickUserProfile : '//span[@id="b2-b3-User_Username"]',
        ClickProfile : '//a[normalize-space()="Profile"]',
        ClickLogout : '//a[normalize-space()="Log out"]',
        showMonthly :'//button[@aria-label="Show Monthly"]',
        back : '//div[@id="b1-b2-ApplicationTitleWrapper"]//span[contains(text(),"Claim Portal")]',
    
    //Assertion
        assertionFooter: '//div[@class="feedback-message-text"]',
        assertionDasboard: '//div[@id="b1-Title"]',
        assertionLogin: '//span[@class="heading5 text-neutral-8"]',
    }
}
