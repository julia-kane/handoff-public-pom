
describe('Hello world', () => {
    it('HomePage should be open by clicking on LOGO', () => {
        cy.visit('/');
        cy.eyesOpen({
            appName: 'handoff.ai',
            testName: 'HomePage visual test',
            browser: [
            {width: 800, height: 600, name: 'firefox'},
            {width: 1024, height: 768, name: 'chrome'},
            {deviceName: 'iPhone 15 Pro' as any},
        ]
        });

        cy.eyesCheckWindow('HomePage');
        cy.get('.link_logo_nav').click();
        cy.eyesCheckWindow('HomePage');
        cy.contains('Pricing').click()
        cy.url().should('contain', '/pricing')
        cy.eyesCheckWindow('Pricing');
        cy.eyesClose();
    });
});