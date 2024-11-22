import dotenv from 'dotenv';
import { createBrowser, createPage } from './browser.js';
import { performLogin } from './login.js';
import { config } from './config.js';
import { mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load environment variables
dotenv.config();

async function main() {
  // Create screenshots directory if it doesn't exist
  await mkdir(join(__dirname, '../screenshots'), { recursive: true });
  
  const browser = await createBrowser();
  
  try {
    const page = await createPage(browser);
    await performLogin(page, config);
  } finally {
    await browser.close();
  }
}

main().catch(console.error);