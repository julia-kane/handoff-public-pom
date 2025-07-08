export default class Navbar {
    // Selectors
    navbar = {
        container: () => cy.get('.container_nav_bar'),
        logo: () => cy.get('.link_logo_nav'),
        logoImage: () => cy.get("img[class='logo_nav_w']"),
        elements: () => cy.get('.bx_link_nav_bar'),
        elementLinkSiblings: () => cy.get('> a'),
        elementDropdownSiblings: () => cy.get('> div'),
        whoWeServeSection: () => cy.get("#w-dropdown-toggle-0"),
        whoWeServeSectionText: () => cy.get("div[aria-controls='w-dropdown-list-0'] div[class$='nav']"),
        whoWeServeDropdown: () => cy.get("div[aria-controls='w-dropdown-list-0'] div[class^='icon']"),
        elementBtnBox: () => cy.get('.bx_bn_nav'),
        loginBtn: () => cy.get("a[class='bn_border_nav w-button']"),
        startAnEstimateBtn: () => cy.get("div[class='bx_bn_nav'] div"),
        // ElementURL = (element: string) => cy.get(`[data-testid="navbar-element-url-${element}"]`);
    }


    // Methods
    visitHomePage = () => {
        cy.visit('/');
    }
    clickLogo = () => {
        this.navbar.logo().click();
    }
    clickWhoWeServeSectionText = () => {
        this.navbar.whoWeServeSectionText().click();
    }
    hoverWhoWeServeSection = () => {
        this.navbar.whoWeServeSection().trigger('mouseover');
    }
    clickWhoWeServeDropdown = () => {
        this.navbar.whoWeServeDropdown().click();
    }
}