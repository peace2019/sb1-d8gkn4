import { chromium } from '@playwright/test';

export async function createBrowser() {
  return await chromium.launch({
    headless: false,
    slowMo: 100 // Add slight delay for stability
  });
}

export async function createPage(browser) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  return await context.newPage();
}