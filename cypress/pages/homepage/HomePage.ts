import Navbar from "./Navbar";

export default class HomePage extends Navbar {
    // Selectors
    hmSection = {
        container: () => cy.get('[data-w-id="1d9b368a-8a37-275a-d8ee-f147da2944aa"]'),
        tagSection: () => cy.get('.bx_tag_section'),
        tagSectionSiblings: () => cy.get('.bx_tag_section > div'),
        tagSectionIcon: () => cy.get('.bx_icon_tag'),
        tagSectionText: () => cy.get("h1[class='h_1_64_700_w']"),
    }

    statisticsSection = {
        container: () => cy.get("div[class='container_statistics']"),
    }

    // Methods



}