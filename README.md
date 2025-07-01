# Playwright Framework

## Overview
This project is a sample framework built using Playwright for end-to-end testing. It includes a basic test case for verifying the title of a web page and utility functions for common tasks.

## Project Structure
```
playwright-framework
├── tests
│   └── Login.spec.ts        # Contains test cases for login functionality
├── src
│   └── helpers
│       └── utils.ts         # Utility functions for use in tests
├── playwright.config.ts      # Configuration file for Playwright
├── package.json              # npm configuration file
└── README.md                 # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd playwright-framework
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the tests:
   ```
   npx playwright test
   ```

## Usage
- The `tests/Login.spec.ts` file contains a sample test case that checks if the title of the page contains a specific substring.
- Utility functions can be added to `src/helpers/utils.ts` for tasks that are reused across multiple tests.

## Contributing
Feel free to submit issues or pull requests for improvements or additional features.