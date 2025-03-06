# 🏆 Swag-Labs Playwright Automation Suite

This repository contains **end-to-end (E2E) UI test automation scripts** using Playwright for the Swag Labs website. It covers login, adding items to the cart, and checkout functionalities using the **Page Object Model (POM)**.

---

## 📌 Project Overview

This project automates web UI testing using Playwright, ensuring smooth user interactions and interface validation. The test suite is designed for **cross-browser testing**, modularity with POM, and efficient test execution.

---

## 🚀 Features

✔ Cross-Browser Testing (Chromium, Firefox, WebKit)
✔ Page Object Model (POM) for Maintainability
✔ Automated Login & Authentication Testing
✔ Adding Items to Cart & Checkout Automation
✔ Headless & Headed Execution Modes
✔ Easy-to-Read Assertions with Playwright Test Runner

---

## 📚 Project Structure

📦 **Swag-Labs-Playwright**

```
📂 tests/
 ┣ 📂 swag-labs/
 ┃ ┣ swag-lab.spec.js
📂 pages/
 ┣ login.js
 ┣ homepage.js
 ┣ checkout.js
📂 tests/screenshots/ (For storing screenshots)
📝 .gitignore
📝 playwright.config.js
📝 package.json
📝 README.md
📝 package-lock.json
```

---

## 🛠️ Installation & Setup

### **1️⃣ Install Playwright**

Ensure **Node.js (v22)** is installed. Then, install Playwright and its dependencies:

```sh
npm init playwright@latest
```

Or manually install:

```sh
npx playwright install
```

### **2️⃣ Clone the Repository**

```sh
git clone https://github.com/junnis111/swag-labs-playwright
cd swag-labs-playwright
npm install
```

---

## 🎯 Running Tests

### **Run All Tests in Headless Mode**

```sh
npx playwright test
```

### **Run Tests in Headed Mode (Visible Browser)**

```sh
npx playwright test --headed
```

### **Run a Specific Test File**

```sh
npx playwright test tests/swag-lab.spec.js
```

### **Run Tests on Specific Browsers**

```sh
npx playwright test --project chromium  # or firefox/webkit
```

### **Run Tests with UI Report**

```sh
npx playwright show-report
```

---

## 💪 Contributing

🚀 Want to improve this project? Contributions are welcome!

1. Fork the repository.
2. Create a new branch (`feature/improve-tests`).
3. Make changes & commit.
4. Submit a pull request (PR).

---

## 📞 Support

📧 Email: [junnis111@gmail.com](mailto:junnis111@gmail.com)
