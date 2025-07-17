import { SamplePage } from "@/pageObjects/samplePage"
import { SamplePageFixture } from "@/types/fixtures/samplePage"
import { test as base } from "@playwright/test"

export const test = base.extend<SamplePageFixture>({
  samplePage: async ({ page }, use) => {
    await use(await SamplePage.navigateTo(page))
  },
})
