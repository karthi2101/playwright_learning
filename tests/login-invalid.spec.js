// @ts-check
import { test, expect } from '@playwright/test';

test('login with invalid credentials shows an error message', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/login');

  await page.locator('input[name="login"]').fill('invalid-user');
  await page.locator('input[name="password"]').fill('wrong-password');
  await page.getByRole('button', { name: /Login/i }).click();

  const errorMessage = page.locator('text=/invalid|incorrect|error/i');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText(/invalid|incorrect|error/i);
});
