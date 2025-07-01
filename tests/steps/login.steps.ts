import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

Given('I am on the home page', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('http://eaapp.somee.com/');
});

When('I click on {string}', async function (buttonText: string) {
  await page.click(`text=${buttonText}`, { timeout: 10000 });
});

When('I fill {string} with {string}', async function (field: string, value: string) {
  await page.fill(`input[name="${field}"]`, value);
});

Then('I should see the title containing {string}', async function (titlePart: string) {
  await page.waitForLoadState('domcontentloaded');
  const title = await page.title();
  expect(title).toContain(titlePart);
  await browser.close();
});

Then('I should see the text {string}', async function (text: string) {
  await expect(page.locator(`text=${text}`)).toBeVisible();
  await browser.close();
});