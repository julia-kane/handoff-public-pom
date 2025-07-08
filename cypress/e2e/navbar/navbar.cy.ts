import {navbar} from "../../pages";

describe('NAVBAR - POSITIVE TESTS', () => {
    beforeEach("login", () => {
        navbar.visitHomePage()
    });
    //
    it('should be able to see and click LOGO image from home page', () => {
        navbar.navbar.logo().should('be.visible');
        navbar.navbar.logoImage().invoke('attr', 'src').should('contain', '6654b18bf79d3812f9b66f3d_Logo.webp');
        navbar.clickLogo();
        cy.url().should('eq', Cypress.config('baseUrl'));
    });
    //
    // it('should be able to see and click LOGO image from profile page', () => {
    //     cy.visit(`/profile/${userId}`);
    //     navbar.logo.navbarLogo().should('be.visible');
    //     navbar.logo.navbarLogo().invoke('attr', 'src').should('contain', navbarElementsData.logo.image);
    //     navbar.logo.navbarLogo().click();
    //     cy.verifyUrl(navbarElementsData.url.homePage);
    // });
    //
    // it('should be able to see and click LOGO image from settings page', () => {
    //     cy.visit('/settings/companyAccount');
    //     navbar.logo.navbarLogo().should('be.visible');
    //     navbar.logo.navbarLogo().invoke('attr', 'src').should('contain', navbarElementsData.logo.image);
    //     navbar.logo.navbarLogo().click();
    //     cy.verifyUrl(navbarElementsData.url.homePage);
    // });
    //
    // for (let i = 0; i < navbarElementsVisible.length; i++) {
    //     it(`should be able to see and click ${navbarElementsVisible[i].name} from home page`, () => {
    //         cy.visit('/');
    //         navbar.navbarElement(navbarElementsVisible[i].name).should('be.visible');
    //         navbar.navbarElement(navbarElementsVisible[i].name).click();
    //         cy.verifyUrl(navbarElementsVisible[i].url);
    //     });
    // }
    //
    // for (let i = 0; i < navbarElementsDropDown.length; i++) {
    //     it(`should be able to see and click ${navbarElementsDropDown[i].name} from home page`, () => {
    //         cy.visit('/');
    //         navbar.navbarElement(navbarElementsDropDown[i].name).should('be.visible');
    //         navbar.navbarElement(navbarElementsDropDown[i].name).trigger('mouseover');
    //         cy.get(navBarSelectors.dropDownMenu).contains(navbarElementsDropDown[i].dropDownItem).click();
    //         cy.verifyUrl(navbarElementsDropDown[i].url);
    //     });
})