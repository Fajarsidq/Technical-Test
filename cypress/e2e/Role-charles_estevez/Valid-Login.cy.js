const LoginPage = require('../../support/Pages/charles_estevez_page/Login')
const DasboardPage = require('../../support/Pages/charles_estevez_page/Dasboard')



describe('INVALID LOGIN charles.estevez (HC)', () => {
  it('Verify user login with registered credentials ', () => {

    LoginPage.vistToWebsite()
    LoginPage.LoginWithValidCredentiantial()
    DasboardPage.logout()
    })

})