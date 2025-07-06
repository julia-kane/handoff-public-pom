import { defineConfig } from 'cypress';
import eyesPlugin from '@applitools/eyes-cypress';
import * as dotenv from 'dotenv';

dotenv.config();

export default eyesPlugin(
    defineConfig({
        viewportWidth: 1440,
        viewportHeight: 900,

        watchForFileChanges: false,

        e2e: {
            chromeWebSecurity: false,

            env: {
                APPLITOOLS_API_KEY: process.env.APPLITOOLS_API_KEY,
                EYES_FAIL_AFTER_ALL_SPECS: false,
            },
            baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:8000/',

            setupNodeEvents(on, config) {
                console.log('Applitools API Key:', process.env.APPLITOOLS_API_KEY ? '✔️ set' : '❌ missing');
                return config;
            },

            supportFile: 'cypress/support/e2e.ts',
        },
    })
);