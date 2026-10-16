
import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",

    timeout: 30000,

    expect: {
        timeout: 5000
    },

    retries: process.env.CI ? 2 : 0,

    fullyParallel: true,

    reporter: [
        ["list"],
        [
            "html",
            {
                outputFolder: "playwright-report",
                open: "never"
            }
        ]
    ],

    use: {
        ignoreHTTPSErrors: true
    }
});
