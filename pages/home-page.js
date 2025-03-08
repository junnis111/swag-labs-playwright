const { expect } = require("@playwright/test");

class Homepage {
  constructor(page) {
    this.page = page;
    this.productList = "div.inventory_item_name";
    this.addToCartBtn = "//button[@id='add-to-cart']";
    this.selectCart = "//span[@class='shopping_cart_badge']";
  }
  async addToCart(productName) {
    const productList = await this.page.$$(this.productList);
    for (const product of productList) {
      const productListText = await product.textContent();
      if (productListText === productName) {
        await product.click();
        break;
      }
    }
    await this.page.locator(this.addToCartBtn).click();
    await expect(this.page.locator(this.selectCart)).toHaveText("1");
    await this.page.locator(this.selectCart).click();
  }
}
module.exports = Homepage;
