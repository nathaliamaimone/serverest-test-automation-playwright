const { expect } = require('@playwright/test');
class LoginPage {

    async fillLoginForm(page, email, password) {
        const emailInput = page.locator('#email');
        const passwordInput = page.locator('#password');
        
        await emailInput.fill(email);
        await passwordInput.fill(password);
      }

      async loginAndValidate(page) {
        const [response] = await Promise.all([
          page.waitForResponse('https://serverest.dev/login', { timeout: 15000 }),
          page.locator('[data-testid="entrar"]').click(),
        ]);
        expect(response.status()).toBe(200);
        await page.locator('h1:has-text("Bem Vindo")').waitFor({ timeout: 10000 });
      }
  }
  
  module.exports = LoginPage;
  