const LoginPage = require('../../support/Pages/charles_estevez_page/Login')


describe('LOGIN charles.estevez (HC)', () => {
  beforeEach(() => {
    LoginPage.vistToWebsite()
  })
    it('Verify user login with unregistered credentials', () => {

      LoginPage.LoginWithInvalidCredentiantial()
    })
    it('Verify user login with unregistered username', () => {

      LoginPage.LoginWithInvalidUsername()
    })

    it('Verify user login with unregistered password', () => {

      LoginPage.LoginWithInvalidpassword()
    })

    it('Verify login without filling in username', () => {

      LoginPage.LoginWithoutUsername()
    })

    it('Verify login without filling in the password', () => {

      LoginPage.LoginWithoutPassword()
    })

    it('Verify login without filling in username and password', () => {

      LoginPage.LoginWithoutUsernameAndPassword()
    })
})