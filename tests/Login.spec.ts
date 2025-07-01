
// 5. Additional Playwright test examples (Login.spec.ts):

import { test, expect } from '@playwright/test';

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://eaapp.somee.com/');
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Home - Execute Automation Employee App/);
  });

  test('can login', async ({ page }) => {
    await page.getByText('Login').click();
    await page.getByLabel('UserName').fill('admin');
    await page.getByLabel('Password').fill('password');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page).toHaveTitle(/Home - Execute Automation Employee App/);
  });

  test('can logout', async ({ page }) => {
    await page.getByText('Login').click();
    await page.getByLabel('UserName').fill('admin');
    await page.getByLabel('Password').fill('password');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByText('Log off').click();
    await expect(page).toHaveTitle(/Home - Execute Automation Employee App/);
  });

  test('cannot login with invalid credentials', async ({ page }) => {
    await page.getByText('Login').click();
    await page.getByLabel('UserName').fill('wronguser');
    await page.getByLabel('Password').fill('wrongpass');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByText('Invalid login attempt.')).toBeVisible();
  });

  test('login form validation', async ({ page }) => {
    await page.getByText('Login').click();
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByText('The UserName field is required.')).toBeVisible();
    await expect(page.getByText('The Password field is required.')).toBeVisible();
  });
});