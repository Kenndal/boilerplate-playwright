import { defineConfig, devices } from "@playwright/test"
import config from "config/config"

export default defineConfig({
  testDir: "./tests",
  timeout: config.timeout,
  expect: { timeout: config.timeout },

  use: {
    baseURL: config.url,
    headless: config.headless,
  },
  reporter: [["html", { outputFolder: "playwright-report" }]],

  projects: [
    {
      name: "regression",
      testIgnore: /.*\.setup\.ts/,
      use: { ...devices["Desktop Chrome"] },
    },
  ],
})
