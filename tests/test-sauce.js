const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Google Search Test', function () {
  let driver;

  it('Visit SauceDemo dan cek page title', async function () {
    driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.saucedemo.com');

    let inputUsername = await driver.findElement(By.css('[data-test="username"]'));
    let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'));
    let buttonLogin = await driver.findElement(By.className('submit-button btn_action'));

    await inputUsername.sendKeys('standard_user');
    await inputPassword.sendKeys('secret_sauce');
    await buttonLogin.click();

await driver.quit();

//    const   title = await driver.getTitle();
//    assert.strictEqual(title, 'Swag Labs');

    let buttonLogin = await driver.findElement(By.className('submit-button btn_action'));
    const isButtonTrue = await buttonLogin.isDisplayed();
    assert.strictEqual(isButtonTrue, true)

//    const apakahCheckboxActive = await buttonLogin.isSelected();
//    assert.strictEqual(apakahCheckboxActive, true)



    await driver.quit();
  });
});
