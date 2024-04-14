const LoginPage = require('../../support/Pages/nancy.martin_page/Login')
const DasboardPage = require('../../support/Pages/nancy.martin_page/Dasboard')


describe('Login', () => {
    it('Verify user login with registered credentials', () => {
        LoginPage.loginWithValidCredential()
        LoginPage.verifyUserSuccessfullyLogin()
        DasboardPage.logout()
    })

    it('Verify login without filling in username and password', () => {
        LoginPage.loginWithoutUsernameAndPassword()
        LoginPage.verifyEmptyFieldErrorMessageAppears()

    })

    it('Verify user login with Invalid credentials', () => {
        LoginPage.loginWithInvalidCredential()
        LoginPage.verifyLogin()
    })

    it('Verify User attempts login without filling in one of the fields ', () => {
        LoginPage.loginWithoutPassword()
        LoginPage.verifyLogin()
    })

    it('Verify user tries to login with one invalid data entry ', () => {
        LoginPage.loginWithOneInvalidData()
        LoginPage.verifyLogin()
    })

})
