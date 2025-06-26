const { Builder, By, until, Key } = require('selenium-webdriver');
const assert = require('assert');

describe('SauceDemo Automation', function () {
  let driver;

  this.timeout(30000);

  before(async function () {
    driver = await new Builder().forBrowser('firefox').build();
  });

  after(async function () {
    await driver.quit();
  });

  async function loginSauceDemo() {
    await driver.get('https://www.saucedemo.com');

    const usernameInput = await driver.findElement(By.css('[data-test="username"]'));
    const passwordInput = await driver.findElement(By.css('[data-test="password"]'));
    const loginButton = await driver.findElement(By.css('[data-test="login-button"]'));

    await usernameInput.sendKeys('standard_user');
    await passwordInput.sendKeys('secret_sauce');
    await loginButton.click();

    await driver.wait(until.elementLocated(By.className('inventory_list')), 10000);
  }

  it('Sukses Login', async function () {
    await loginSauceDemo();

    const title = await driver.getTitle();
    assert.strictEqual(title, 'Swag Labs');
  });
});
