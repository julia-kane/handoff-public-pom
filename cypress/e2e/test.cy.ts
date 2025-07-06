
describe('Hello world', () => {
    it('works', () => {
        cy.visit('https://www.handoff.ai/');
        cy.eyesOpen({
            appName: 'handoff.ai',
            testName: 'HomePage visual test',
            browser: [
            {width: 800, height: 600, name: 'firefox'},
            {width: 1024, height: 768, name: 'chrome'},
            {deviceName: 'iPhone 14 Pro Pro' as any},
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