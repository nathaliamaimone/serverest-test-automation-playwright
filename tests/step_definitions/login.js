const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');

let browser;

Given('que o usuário acesse a página de login', async function () {
  browser = await chromium.launch({ headless: false });
  this.page = await browser.newPage();
  await this.page.goto('https://front.serverest.dev/login');
});

When('ele preenche o usuário e a senha corretamente', async function () {
  const email = 'nathalia@qa.com';
  const password = 'password';

  await this.page.locator('#email').fill(email);
  await this.page.locator('#password').fill(password);
});

Then('ele deve ser autenticado com sucesso', async function () {
  const [response] = await Promise.all([
    this.page.waitForResponse('https://serverest.dev/login', { timeout: 15000 }),
    this.page.locator('[data-testid="entrar"]').click(),
  ]);
  expect(response.status()).toBe(200);

  await this.page.locator('h1:has-text("Bem Vindo")').waitFor({ timeout: 10000 });
});
