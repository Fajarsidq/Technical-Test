const DasboardPage = require('../../support/Pages/charles_estevez_page/Dasboard')
const LoginPage = require('../../support/Pages/charles_estevez_page/Login')


describe('DASBOARD charles.estevez (HC)', () => {

  before(() => {
    LoginPage.vistToWebsite()
    LoginPage.LoginWithValidCredentiantial()


  })
    it('Verify Footer privacy policy in Website ', () => {

      DasboardPage.footerPrivacyPolicy()
    })

    it('Verify Footer Terms and conditions in Website  ', () => {

      DasboardPage.footerTermsNconditions()
    })

    it('Verify Footer Cookies in Website  ', () => {

      DasboardPage.footerCookies()
    })

    it('Verify user tries to view the Profile feature ', () => {

      DasboardPage.DetailProfile()
    })

    
    it('Verify users tries to log out ', () => {

      DasboardPage.logout()
    })
})