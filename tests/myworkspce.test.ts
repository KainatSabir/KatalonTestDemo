import { test, expect, Browser,BrowserContext, Page } from '@playwright/test';
import { chromium, firefox, webkit } from 'playwright'
import openPage from '../pages/openPage';
import LoginPage from '../pages/loginPage';
import * as dotenv from 'dotenv';
import HomePage from '../pages/homePage';
dotenv.config();  //load env variables from .env file

const BASE_URL = process.env.BASE_URL || 'http://localhost';

test.describe('New Workspace tests', () => {

    //declaring global variables
    let page: Page;
    let loginPage: LoginPage;
    let homePage:HomePage;

    //open fresh instance of page before each test
    test.beforeEach(async ({ browser }) => {
        const pageManager = new openPage('chrome', false);
        await pageManager.initialize();
        page = await pageManager.gotoUrl(BASE_URL);
        await page.waitForLoadState('load');

     /*     // Create an instance of LoginPage
          loginPage = new LoginPage(page);
          // Wait for the login form to be visible
          await expect(loginPage.logintxt).toBeVisible({ timeout: 10000 });
        await loginPage.login(process.env.TEST_USER_EMAIL || '', process.env.TEST_USER_PASSWORD || '');
    */
      });
    
    
    test('Test Case-2: New Workspace', async () => {
        const loginPage = new LoginPage(page);

        await expect(loginPage.logintxt).toBeVisible();
        await loginPage.login(process.env.TEST_USER_EMAIL || '', process.env.TEST_USER_PASSWORD || '');
    
        await expect(loginPage.dashboardText).toBeVisible();
        const homePage = new HomePage(page);
        await homePage.mynewWorkspace.click();

      
      });

});
