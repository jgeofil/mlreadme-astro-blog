import { test, expect } from '@playwright/test';
const TARGET_URL = process.env.TARGET_URL || 'http://localhost:3000';
test('test', async ({ page }) => {
  await page.goto(TARGET_URL);
  await expect(page.getByRole('link', { name: 'ML Readme' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  //await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'About', exact: true })).toBeVisible();
  await expect(page.locator('ul > li > a').first()).toBeVisible();
  //await expect(page.locator('div').filter({ hasText: 'Byte-Pair Encoding (BPE)' })).toBeVisible();
});