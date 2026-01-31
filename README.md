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
│   │   ├── positive-functional.spec.js   (24 tests)
│   │   └── negative-functional.spec.js   (10 tests)
│   │
│   ├── ui/
│   │   ├── positive-ui.spec.js           (10 tests)
│   │   └── negative-ui.spec.js           (10 tests)
│
├── playwright.config.js
├── package.json

## 📥 Clone the Repository

git clone https://github.com/Kalindu123/Playwright

# Navigate to the Project Directory

cd Playwright

# Install Project Dependencies

npm install

# Install Playwright Browsers

npx playwright install

# Running the Tests
Run all tests 
npx playwright test

Run tests in headed mode (with browser UI)
npx playwright test --headed

# Generate HTML Test Report
npx playwright test --reporter=html

View the HTML Report
npx playwright show-report

🧪 Test Coverage
✅ Positive Functional Test Cases

Singlish to Sinhala translation validation

Sentence-level and phrase-level input handling

UI-based output verification

❌ Negative Functional Test Cases

Unsupported or invalid inputs

Mixed alphanumeric characters

Special characters and script injection attempts

Chat shorthand and spelling errors

🖥️ UI Test Cases

Input field behavior

Secure handling of invalid inputs

UI stability and responsiveness

⚠️ Known Limitation

The SwiftTranslator application does not always generate complete Sinhala sentence translations.
In some cases, it provides word-level or phrase-based suggestions instead of full sentence conversions.

This limitation has been identified and documented as part of the test analysis.

🎯 Intended Use

This project is intended for:

Academic Software Testing assignments

ITPM coursework

Learning and practicing Playwright automation testing

👨‍🎓 Author
Kalindu Methmuditha
BSc (Hons) in Information Technology
Year 3 – Semester 1


