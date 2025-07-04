const { Builder, By, until, Key } = require('selenium-webdriver');
const assert = require('assert');

describe('SauceDemo Automation', function () {
  let driver;

  this.timeout(30000);

  before(async function () {
    // Untuk menjalankan browser sekali sebelum semua test
    driver = await new Builder().forBrowser('firefox').build();
  });

  after(async function () {
   // Untuk tutup browser setelah semua test selesai
    await driver.quit();
  });

   beforeEach(async function () {
      // Untuk melakukan login ulang sebelum setiap test
      await loginSauceDemo();
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
    it('Urutkan produk dari A to Z', async function () {
      await loginSauceDemo(); // login ulang agar DOM segar

      const option1 = await driver.wait(
        until.elementLocated(By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[1]')),
        10000
      );

      const optionText = await option1.getText();
      assert.strictEqual(optionText, 'Name (A to Z)');
    });
});
