import { chromium } from '@playwright/test';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

async function loginToWebsite() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Navigate to the login page
    await page.goto(process.env.LOGIN_URL);

    // Wait for and fill in email field
    await page.waitForSelector('input[type="email"], input[name="email"]');
    await page.fill('input[type="email"], input[name="email"]', process.env.EMAIL);

    // Wait for and fill in password field
    await page.waitForSelector('input[type="password"]');
    await page.fill('input[type="password"]', process.env.PASSWORD);

    // Click the login button
    await page.click('button[type="submit"]');

    // Wait for navigation after login
    await page.waitForNavigation();
    
    console.log('Successfully logged in!');

    // Optional: Take a screenshot after login
    await page.screenshot({
      path: join(__dirname, 'login-success.png')
    });

  } catch (error) {
    console.error('Login failed:', error);
    await page.screenshot({
      path: join(__dirname, 'login-error.png')
    });
  } finally {
    await browser.close();
  }
}

loginToWebsite().catch(console.error);