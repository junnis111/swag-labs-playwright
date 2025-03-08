const { expect } = require("@playwright/test");

class Login {
  constructor(page) {
    this.page = page;
    this.username = "#user-name";
    this.password = "#password";
    this.loginButton = "#login-button";
    this.productName = ".title";
  }
  async goToSwagLab() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async loginPage(username, password) {
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.loginButton).click();
    await expect(this.page.locator(this.productName)).toHaveText("Products");
  }
}

module.exports = Login;
