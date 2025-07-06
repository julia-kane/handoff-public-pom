import { defineConfig } from "cypress";
import eyesPlugin from '@applitools/eyes-cypress'

export default eyesPlugin(
    defineConfig({
        viewportWidth: 1440,
        viewportHeight: 900,

        e2e: {
            chromeWebSecurity: false,
            env: {},
            // baseUrl: '',
            setupNodeEvents(on, config) {
                // implement node event listeners here
            },
            supportFile: 'cypress/support/e2e.ts',

            watchForFileChanges: false,
        },
}));
