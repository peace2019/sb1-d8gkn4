import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function performLogin(page, config) {
  try {
    // Navigate to login page
    await page.goto(config.loginUrl);
    
    // Fill in login form
    await page.waitForSelector(config.selectors.emailField);
    await page.fill(config.selectors.emailField, config.credentials.email);
    
    await page.waitForSelector(config.selectors.passwordField);
    await page.fill(config.selectors.passwordField, config.credentials.password);
    
    // Check remember me
    await page.check(config.selectors.rememberMe);
    
    // Submit form
    await page.click(config.selectors.submitButton);
    
    // Wait for navigation
    await page.waitForNavigation();
    
    console.log('Successfully logged in to BLS Spain Morocco!');
    
    await page.screenshot({
      path: join(__dirname, '../screenshots/login-success.png'),
      fullPage: true
    });
    
    return true;
  } catch (error) {
    console.error('Login failed:', error.message);
    await page.screenshot({
      path: join(__dirname, '../screenshots/login-error.png'),
      fullPage: true
    });
    return false;
  }
}