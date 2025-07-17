import { Locator, Page } from "@playwright/test"

export interface IPageObject {
  page: Page
}

export interface IPage extends IPageObject {
  getHeading(page: Page): Locator
}

export interface ISamplePage extends IPage {}
