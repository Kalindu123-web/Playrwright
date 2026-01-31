# SwiftTranslator Playwright Automation Tests

This repository contains **automated functional and UI test cases** for  
**SwiftTranslator (https://www.swifttranslator.com/)** using **Playwright**.

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

playwright-tests/
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

Clone the Repository

git clone https://github.com/Kalindu123/Playwright

Navigate to the Project Directory

cd Playwright

Install Project Dependencies

npm install

Install Playwright Browsers

npx playwright install

Running the Tests
Run all tests 
npx playwright test

Run tests in headed mode (with browser UI)
npx playwright test --headed

Generate HTML Test Report
npx playwright test --reporter=html

View the HTML Report
npx playwright show-report


Intended Use

This project is intended for:

Academic Software Testing assignments

ITPM coursework

Learning and practicing Playwright automation testing

👨‍🎓 Author
Kalindu Methmuditha
BSc (Hons) in Information Technology
Year 3 – Semester 1


