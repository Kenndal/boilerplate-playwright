import { test } from "@/fixtures/samplePage"
import { expect } from "@playwright/test"

test.describe("Sample Page", () => {
  test("should load correctly", async ({ samplePage }) => {
    await expect(samplePage.getHeading()).toBeVisible()
  })
})
