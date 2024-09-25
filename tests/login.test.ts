import { test, expect, Browser,BrowserContext, Page } from '@playwright/test';
import { chromium, firefox, webkit } from 'playwright'
import openPage from '../pages/openPage';
import LoginPage from '../pages/loginPage';
import * as dotenv from 'dotenv';
dotenv.config();  //load env variables from .env file

const BASE_URL = process.env.BASE_URL || 'http://localhost';

test.describe('login tests', () => {

    //declaring global variables
    let page: Page;
    let loginPage: LoginPage;

    //open fresh instance of page before each test
    test.beforeEach(async ({ browser }) => {
        const pageManager = new openPage('chrome', false);
        await pageManager.initialize();
        page = await pageManager.gotoUrl(BASE_URL);
        await page.waitForLoadState('load');
      });
    
    
    test('Test Case-1: Login User with correct email and password', async () => {
        const loginPage = new LoginPage(page);

        await expect(loginPage.logintxt).toBeVisible();
        await loginPage.login(process.env.TEST_USER_EMAIL || '', process.env.TEST_USER_PASSWORD || '');
    
        await expect(loginPage.dashboardText).toBeVisible();
      });

});
