# Playwright + Cucumber.js (BDD) Test Framework

This project uses [Playwright](https://playwright.dev/) for browser automation and [Cucumber.js](https://github.com/cucumber/cucumber-js) for Behavior-Driven Development (BDD) style tests.

## Project Structure

- `tests/Features/*.feature` — Gherkin feature files (BDD scenarios)
- `tests/steps/*.steps.ts` — Step definitions (TypeScript, using Playwright)
- `playwright.config.ts` — Playwright configuration
- `cucumber.js` — Cucumber.js configuration

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```

2. Run Playwright tests:
   ```sh
   npm test
   ```

3. Run BDD (Cucumber.js) tests:
   ```sh
   npm run bdd
   ```

## Example

A sample feature file is in `tests/Features/login.feature`. Step definitions are in `tests/steps/login.steps.ts`.

## Notes

- Update the URL in the step definitions to match your application.
- You can add more `.feature` files and corresponding step definitions as needed.
- Added the github/workflow folder and the ci.yml file

---