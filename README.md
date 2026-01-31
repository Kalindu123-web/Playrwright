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

#Instalation

01.Clone the Repository
git clone https://github.com/Kalindu123/Playwright

02.Navigate to the Project Directory
cd Playwright

03.Install Project Dependencies
npm install

04.Install Playwright Browsers
npx playwright install

05.Running the Tests
Run all tests 
npx playwright test

06.Run tests in headed mode (with browser UI)
npx playwright test --headed

07.Generate HTML Test Report
npx playwright test --reporter=html

08.View the HTML Report
npx playwright show-report


# Intended Use

This project is intended for:

Academic Software Testing assignments

ITPM Module

Learning and practicing Playwright automation testing

👨‍🎓 Author
Kalindu Methmuditha
BSc (Hons) in Information Technology
Year 3 – Semester 1


