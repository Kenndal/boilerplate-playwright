import { LandingPage } from "@/pageObjects/landingPage"
import { LandingPageFixture } from "@/types/fixtures/samplePage"
import { test as base } from "@playwright/test"

export const test = base.extend<LandingPageFixture>({
  landingPage: async ({ page }, use) => {
    await use(await LandingPage.navigateTo(page))
  },
})
