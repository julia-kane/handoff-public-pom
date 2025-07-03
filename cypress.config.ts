import { defineConfig } from "cypress";
import { testGenAICypressTasksSetup } from "@applitools/testgenai-cypress/tasks";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            testGenAICypressTasksSetup(on);
        },
    },
    env: {
        applitoolsTestGenAI: {
            autohealDataFolders: ['cypress/testgenai/autoheal'],
        }
    }
});
