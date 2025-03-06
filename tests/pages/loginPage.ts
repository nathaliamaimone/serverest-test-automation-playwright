import { expect, Page } from "@playwright/test"; // Importe o tipo Page

export default class LoginPage {
    async fillLoginForm(page: Page, email: string, password: string): Promise<void> {
        const emailInput = page.locator('#email');
        const passwordInput = page.locator('#password');
        
        await emailInput.fill(email);
        await passwordInput.fill(password);
    }
    async loginAndValidate(page: Page): Promise<void> {
        const [response] = await Promise.all([
          page.waitForResponse('https://serverest.dev/login', { timeout: 15000 }),
          page.locator('[data-testid="entrar"]').click(),
        ]);
        expect(response.status()).toBe(200);
        
        await page.locator('h1:has-text("Bem Vindo")').waitFor({ timeout: 10000 });
    }
}
