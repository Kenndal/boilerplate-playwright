import { ISamplePage } from "@/types/pageObjects/base"
import { expect, Locator, Page } from "@playwright/test"

export class SamplePage implements ISamplePage {
  readonly page: Page
  static readonly url = ""

  private readonly heading: Locator

  constructor(page: Page) {
    this.page = page
    this.heading = this.page.getByText("Swag Labs")
  }

  private async waitToLoad(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(SamplePage.url))
    await expect(this.heading).toBeVisible()
  }

  public static async use(page: Page): Promise<SamplePage> {
    const samplePage = new SamplePage(page)
    await samplePage.waitToLoad()
    return samplePage
  }

  public static async navigateTo(page: Page): Promise<SamplePage> {
    await page.goto(SamplePage.url)
    return await this.use(page)
  }

  public getHeading(): Locator {
    return this.heading
  }
}
