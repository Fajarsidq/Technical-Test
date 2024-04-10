const locator = require('../../Locators/charles_estevez_locator/Login-Locator')
const staticText = require('../../Static_text/charles_estevez_statictText/static_text')

class loginPage {

    async vistToWebsite () {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal',{failOnStatusCode: false})
        cy.viewport(window.screen.width, window.screen.height)
    }

    async LoginWithValidCredentiantial () {
        cy.xpath(locator.datatestid.click_username).type(staticText.data_static.userName,{force: true}).should('be.visible', {timeout: 10000})
        cy.xpath(locator.datatestid.click_password).type(staticText.data_static.password,{force: true}).should('be.visible', {timeout: 10000})
        cy.xpath(locator.datatestid.click_login).click({force: true})
        cy.wait(3000)
    }

    async LoginWithInvalidCredentiantial () {
        cy.xpath(locator.datatestid.click_username).clear().type(staticText.data_static.invalidUserName,{force: true}).should('be.visible', {timeout: 10000})
        cy.xpath(locator.datatestid.click_password).clear().type(staticText.data_static.invalidpassword,{force: true}).should('be.visible', {timeout: 10000})
        cy.xpath(locator.datatestid.click_login).click({force: true})
        cy.wait(3000)

    }

    async LoginWithInvalidUsername () {
        cy.xpath(locator.datatestid.click_username).clear().type(staticText.data_static.invalidUserName,{force: true}).should('be.visible', {timeout: 10000})
        cy.xpath(locator.datatestid.click_password).clear().type(staticText.data_static.password,{force: true}).should('be.visible', {timeout: 10000})
        cy.xpath(locator.datatestid.click_login).click({force: true})
        cy.wait(3000)

    }

    async LoginWithInvalidpassword () {
        cy.xpath(locator.datatestid.click_username).clear().type(staticText.data_static.userName,{force: true}).should('be.visible', {timeout: 10000})
        cy.xpath(locator.datatestid.click_password).clear().type(staticText.data_static.invalidpassword,{force: true}).should('be.visible', {timeout: 10000})
        cy.xpath(locator.datatestid.click_login).click({force: true})
        cy.wait(3000)

    }
    
    async LoginWithoutUsername () {
        cy.xpath(locator.datatestid.click_username).clear()
        cy.xpath(locator.datatestid.click_password).clear().type(staticText.data_static.password,{force: true}).should('be.visible', {timeout: 10000})
        cy.xpath(locator.datatestid.click_login).click({force: true})
        cy.wait(3000)

    }

    async LoginWithoutPassword () {
        cy.xpath(locator.datatestid.click_username).clear().type(staticText.data_static.userName,{force: true}).should('be.visible', {timeout: 10000})
        cy.xpath(locator.datatestid.click_password).clear()
        cy.xpath(locator.datatestid.click_login).click({force: true})
        cy.wait(3000)

    }
    async LoginWithoutUsernameAndPassword () {
        cy.xpath(locator.datatestid.click_login).click({force: true})
        cy.xpath(locator.datatestid.Assertion_Req).should('contain','This field is required.')
        cy.wait(3000)


    }
}

module.exports = new loginPage()