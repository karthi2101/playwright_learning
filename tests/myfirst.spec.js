import {test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { RegisterPage } from '../pages/RegisterPage.js';

// test('mytest', async ({page}) => {
//     await page.goto('https://buggy.justtestit.org/');
//     await expect(page).toHaveURL(/buggy.justtestit.org/);
// });

// test('test2', async ({page}) =>{
//     await page.goto('https://buggy.justtestit.org/');
//     await page.getByRole('button', { name: 'Register' }).click;
//     await expect(page).toHaveURL(/buggy.justtestit.org/);
// });

// test('test3', async ({page}) =>{
//     await page.goto('https://buggy.justtestit.org/');
//     await page.getByPlaceholder('Login').fill('testuser');
//     await page.locator('input[type="password"]').fill('test123');
//     await page.getByRole('button', {name: 'Login'}).click();
//     await expect(page.getByPlaceholder('Login')).toHaveValue('testuser');
//     await expect(page.getByText('Invalid username/password')).toBeVisible();
// });

// test('test4', async ({page}) =>{
//     await page.goto('https://buggy.justtestit.org/');
//     await page.getByRole('link',{name: 'Register'}).click();
//     await expect(page).toHaveURL(/register/);
// });

// test('test5', async ({page}) =>{
//     await page.goto('https://buggy.justtestit.org/');
//     await page.getByRole('link',{name: 'Register'}).click();
//     await page.getByLabel('Login').fill('SK123');
//     await page.getByLabel('First Name').fill('james');
//     await page.getByLabel('Last Name').fill('Bond');
//     await page.getByLabel('Password', { exact: true }).fill('SK@1234');
//     await page.getByLabel('Confirm Password').fill('SK@1234');
//     await expect(page.getByRole('button', {name:'Register'})).toBeEnabled();
//     await page.getByRole('button', {name:'Register'}).click();
// });


test.describe('Login test', () =>{
    test.beforeEach(async ({ page }) => {
    await page.goto('https://buggy.justtestit.org/'); // runs before every test!
  });
    test.afterEach(async ({ page }) => {
    // runs after every test automatically
    console.log('Login Test finished!');
  });
    test('Login validation', async ({page}) =>{
     const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('testuser', 'test123');

    await expect(loginPage.errorMessage).toBeVisible();
});
});

test.describe('Register test', () =>{
    test.beforeEach(async ({ page }) => {
    await page.goto('https://buggy.justtestit.org/'); // runs before every test!
  });
    test.afterEach(async ({ page }) => {
    // runs after every test automatically
    console.log('Register Test finished!');
  });
    test('Registration success', async ({ page }) => {
    const registerPage = new RegisterPage(page);
  await test.step('Navigate to register page', async () => {
    
    await registerPage.goto();
  });

  await test.step('Fill registration form', async () => {
    await registerPage.Register('James', 'Bond', 'SK123', 'SK@1234');
  });

  await test.step('Submit and verify', async () => {
    await expect(registerPage.registerButton).toBeEnabled();
  });

});
});


