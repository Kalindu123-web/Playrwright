# SwiftTranslator Playwright Automation Tests

This repository contains **automated functional and UI test cases** for  **SwiftTranslator (https://www.swifttranslator.com/)** using **Playwright**.

The tests validate the **accuracy, robustness, and UI behavior** of the Singlish → Sinhala translation feature.

---

## Objectives

- Verify correct translation of **Singlish sentences into Sinhala**
- Validate **positive functional scenarios**
- Identify system limitations using **negative functional test cases**
- Ensure UI input handling is secure and stable
- Demonstrate real-world **QA automation practices**

---

## Tech Stack

- **Playwright**
- **JavaScript (Node.js)**
- **Chromium / Firefox / WebKit**
- **Headless & Headed execution**

---

## Project Structure

playwright/
│
├── tests/
│   ├── functional/
│   │   ├── positive-functional.spec.js   
│   │   └── negative-functional.spec.js   
│   │
│   ├── ui/
│   │   ├── positive-ui.spec.js           
│   │   └── negative-ui.spec.js          
│
├── playwright.config.js
├── package.json

# Installation

git clone https://github.com/Kalindu123-web/Playrwright  

Navigate to the project directory  
cd Playwright  

Install project dependencies  
npm install  

Install Playwright browsers  
npx playwright install  

Run all tests (headless mode)  
npx playwright test  

Run tests in headed mode (with browser UI)  
npx playwright test --headed  

Generate HTML test report  
npx playwright test --reporter=html  

View the HTML report  
npx playwright show-report  

 
This project is intended for:  

Academic software testing assignments ITPM Module  

Learning Playwright automation  

👨‍🎓Author  

Kalindu Methmuditha  
BSc (Hons) in Information Technology  
Year 3 – Semester 1  

