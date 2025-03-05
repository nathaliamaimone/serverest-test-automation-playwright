const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

let browser;
let loginPage = new LoginPage();

Given('que o usuário acesse a página de login', async function () {
  browser = await chromium.launch({ headless: false });
  this.page = await browser.newPage();
  await this.page.goto('https://front.serverest.dev/login');
});

When('ele preenche o usuário e a senha corretamente', async function () {
  const email = 'nathalia@qa.com';
  const password = 'password';

  await loginPage.fillLoginForm(this.page, email, password);
});

Then('ele deve ser autenticado com sucesso', async function () {
  await loginPage.loginAndValidate(this.page);
});
