describe('Applitools basic test', () => {
    it('opens page and runs eyes', () => {
        cy.visit('https://example.com');
        cy.eyesOpen({
            appName: 'demo app',
            testName: 'basic test',
            browser: [{ width: 800, height: 600, name: 'chrome' }],
        });
        cy.eyesCheckWindow('Example page');
        cy.eyesClose();
    });
});