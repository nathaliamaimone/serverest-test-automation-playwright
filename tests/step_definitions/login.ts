import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from "../hooks/pageFixture";
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();

Given('que o usuário acesse a página de login', async function () {
  await pageFixture.page.goto('https://front.serverest.dev/login');
});

When('ele preenche o usuário e a senha corretamente', async function () {
  const email = 'nathalia@qa.com';
  const password = 'password';

  await loginPage.fillLoginForm(pageFixture.page, email, password);
});

Then('ele deve ser autenticado com sucesso', async function () {
  await loginPage.loginAndValidate(pageFixture.page); 
});
