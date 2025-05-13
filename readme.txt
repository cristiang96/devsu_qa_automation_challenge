# QA Automation Challenge - E2E and API Testing using Cypress

## Project Overview
This project includes automated tests developed in Cypress for:
- E2E functional UI flow on https://www.demoblaze.com/
- API testing for login and signup endpoints https://api.demoblaze.com/signup, https://api.demoblaze.com/login

---

## Prerequisites
    - Node.js installed (Used v22.15.0)
    - Git installed

---

## Folder Structure

cypress/
│
├── api/
│ ├── endpoints/ # API classes (login, signup)
│ ├── entities/ # Data models
│ └── tests/ # API test specs
│
├── e2e/
│ ├── pages/ # Page Object Model for cart, home, product
│ └── tests/ # E2E UI test spec
│
├── screenshots/ # screenshots folder
├── support/ # Cypress support files (commands, e2e setup)
├── utils/ # Utilities (e.g., date helper)

---

## Project Setup and Run tests

1. Clone the repository:
    - git clone https://github.com/cristiang96/devsu_qa_automation_challenge.git

2. Install dependencies:
    - npm install

---

3. Running the Tests

## All Tests (Headless)
    - npm run tests

## All Tests (Headed - visible browser)
    - npm run tests:headed

## E2E Tests Only
    - npm run e2e:tests

## API Tests Only
    - npm run api:tests

---

## Technologies Used
- Cypress
- JavaScript
- Faker.js (for generating test data)

---

## Notes
- Utilized Cypress's built-in CLI reporter for terminal output.
- Screenshots are automatically saved on test failure.
- E2E tests use Page Object Model (POM) for maintainability.
- API tests are modularized using entities and endpoint structure.

---

## Author
Developed by: Edson Guerra