const { test, expect } = require("@playwright/test");
import Login from "../pages/login";
import Homepage from "../pages/homepage";
import CheckOut from "../pages/checkout";

test("login", async ({ page }) => {
  // Login
  const login = new Login(page);
  await login.goToSwagLab();
  await login.loginPage("standard_user", "secret_sauce");

  // Add item to cart
  const homepage = new Homepage(page);
  await homepage.addToCart("Sauce Labs Backpack");

  // Checkout item
  const checkOut = new CheckOut(page);
  await checkOut.checkOutItem("Junad", "Khan", "54000");
});
