const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

describe('Test Suite - Google Search', function () {
  let driver;

  it('Test Case - Headless Chrome - Visit SauceDemo dan cek page title', async function () {
    const options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--incognito');

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

    // driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.saucedemo.com');
    const title = await driver.getTitle();
    await driver.quit();
  });
});
