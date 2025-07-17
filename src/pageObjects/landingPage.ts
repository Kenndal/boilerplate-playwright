import { ILandingPage as ILandingPage } from "@/types/pageObjects/base"
import { expect, Locator, Page } from "@playwright/test"

export class LandingPage implements ILandingPage {
  readonly page: Page
  static readonly url = ""

  private readonly heading: Locator

  constructor(page: Page) {
    this.page = page
    this.heading = this.page.getByText("Swag Labs")
  }

  private async waitToLoad(): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(LandingPage.url))
    await expect(this.heading).toBeVisible()
  }

  public static async use(page: Page): Promise<LandingPage> {
    const samplePage = new LandingPage(page)
    await samplePage.waitToLoad()
    return samplePage
  }

  public static async navigateTo(page: Page): Promise<LandingPage> {
    await page.goto(LandingPage.url)
    return await this.use(page)
  }

  public getHeading(): Locator {
    return this.heading
  }
}
