const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser, page;

Given('que o usuário acesse a página de login', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://front.serverest.dev/login');
});

When('ele preenche o usuário e a senha corretamente', async function () {
  const email = 'nathalia@qa.com';
  const password = 'password';

  await page.locator('#email').fill(email);
  await page.locator('#password').fill(password);

  await page.locator('[data-testid="entrar"]').click();
});

// Then('ele deve ser autenticado com sucesso', async function () {

// });
