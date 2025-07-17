import { test } from "@/fixtures/landingPage"
import { expect } from "@playwright/test"

test.describe("Landing Page", () => {
  test("should load correctly", async ({ landingPage: landingPage }) => {
    await expect(landingPage.getHeading()).toBeVisible()
  })
})
