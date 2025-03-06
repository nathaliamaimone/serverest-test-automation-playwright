import { Given, When, Then } from '@cucumber/cucumber';
import { Browser, chromium, Page } from "@playwright/test"


let browser: Browser;
let page: Page;

Given('que o usuário acesse a página de login', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://front.serverest.dev/login');
});

// When('ele preenche o usuário e a senha corretamente', async function () {
//   const email = 'nathalia@qa.com';
//   const password = 'password';

//   await loginPage.fillLoginForm(this.page, email, password);
// });

// Then('ele deve ser autenticado com sucesso', async function () {
//   await loginPage.loginAndValidate(this.page);
// });
