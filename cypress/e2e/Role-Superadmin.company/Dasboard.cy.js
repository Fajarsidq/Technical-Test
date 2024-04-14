const DasboardPage = require('../../support/Pages/Superadmin.company_page/Dasboard')
const LoginPage = require('../../support/Pages/Superadmin.company_page/Login')


describe('DASBOARD', () => {

  before(() => {
    LoginPage.loginWithValidCredential()
    LoginPage.verifyUserSuccessfullyLogin()
})
    it('Verify Footer privacy policy in Website ', () => {

      DasboardPage.footerPrivacyPolicy()
      DasboardPage.verifyFooter()
    })

    it('Verify Footer Terms and conditions in Website  ', () => {

      DasboardPage.footerTermsNconditions()
      DasboardPage.verifyFooter()

    })

    it('Verify Footer Cookies in Website  ', () => {

      DasboardPage.footerCookies()
      DasboardPage.verifyFooter()

    })

    it('Verify user tries to show the Profile feature ', () => {

      DasboardPage.DetailProfile()
      DasboardPage.verifyDetailProfile()
    })

    it('Verify user tries to show monthly dashboard', () => {

      DasboardPage.showMonthly()
      DasboardPage.verifyShowMonthly()
    })
    
    it('Verify users tries to log out ', () => {

      DasboardPage.logout()
      DasboardPage.verifyLogout()

    })
})