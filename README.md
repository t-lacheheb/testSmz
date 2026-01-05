# QA Testing

This repository contains the test documentation, manual test cases, automated test scripts, and bug reports for the Smeetz product page testing assignment.

## Project Structure

```
testSmz/
├── cypress/
│   ├── e2e/
│   │   └── smeetz-product-page.cy.js    # Automated test cases
│   ├── support/
│   │   ├── commands.js                   # Custom Cypress commands
│   │   ├── e2e.js                        # Support file
│   │   └── pages/
│   │       └── ProductPage.js           # Page Object Model
│   ├── fixtures/                         # Test data (if needed)
│   ├── screenshots/                      # Test execution screenshots
│   └── videos/                           # Test execution videos
├── MANUAL_TEST_CASES.md                  # Manual test cases documentation
├── BUG_REPORTS.md                        # Bug reports in Jira format
├── package.json                          # Project dependencies
├── cypress.config.js                     # Cypress configuration
└── README.md                             # This file
```

## Test URL

**Test Environment:** https://test-discover.smeetz.com/en/product/b2b/qa-take-home?referrer=preview&productId=40301

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Verify Cypress installation:
```bash
npx cypress verify
```

## Running Tests

### Open Cypress Test Runner (Interactive Mode)
```bash
npm run cypress:open
```
This will open the Cypress Test Runner where you can:
- Select and run individual tests
- Watch tests execute in real-time
- Debug tests using browser developer tools

### Run Tests in Headless Mode
```bash
npm run cypress:run
```
This will run all tests in headless mode and generate:
- Screenshots (on failure)
- Videos (of test execution)
- Test reports

### Run Specific Test File
```bash
npx cypress run --spec "cypress/e2e/smeetz-product-page.cy.js"
```

## Test Cases Overview

### Manual Test Cases (3 Scenarios)

1. **TC-MANUAL-001:** Verify Product Page Loads and Displays Correctly
   - Tests page load, element visibility, and basic functionality

2. **TC-MANUAL-002:** Verify Date Selection and Availability Check
   - Tests date picker functionality and availability display

3. **TC-MANUAL-003:** Verify Quantity Selection and Price Calculation
   - Tests quantity selector and dynamic price calculation

### Automated Test Cases (2 Scenarios)

1. **TC-AUTO-001:** Verify Product Page Loads Correctly
   - Automated version of TC-MANUAL-001
   - Validates page elements and structure

2. **TC-AUTO-002:** Verify Date Selection and Booking Flow
   - Automated version of TC-MANUAL-002
   - Tests date selection interaction

## Test Execution Results

### Automated Test Execution Steps

1. **Pre-execution:**
   - Ensure all dependencies are installed
   - Verify test URL is accessible
   - Clear browser cache if needed

2. **Execution:**
   ```bash
   npm run cypress:run
   ```

3. **Post-execution:**
   - Review test results in terminal
   - Check screenshots in `cypress/screenshots/`
   - Review videos in `cypress/videos/`
   - Document actual results in test case files

### Expected Test Results

- **TC-AUTO-001:** Should pass if page loads correctly
- **TC-AUTO-002:** May require adjustment based on actual date picker implementation

## Bug Reports

All identified bugs are documented in `BUG_REPORTS.md` following Jira format, including:
- Bug title and description
- Steps to reproduce
- Expected vs Actual results
- Severity and priority
- Screenshots and attachments

## Page Object Model (POM)

The project uses Page Object Model pattern for maintainable test code:

- **ProductPage.js:** Contains all page elements and methods
- Methods are reusable across multiple test cases
- Easy to update when page structure changes

## Test Coverage

### Functional Testing
- ✅ Page load and display
- ✅ Date selection functionality
- ✅ Quantity selection
- ✅ Price calculation
- ✅ Booking flow initiation

### Non-Functional Testing
- ⚠️ Performance (page load time)
- ⚠️ Usability (user experience)
- ⚠️ Cross-browser compatibility
- ⚠️ Responsive design

## Notes

- Test selectors are designed to be flexible and handle various page structures
- Some tests may need adjustment based on actual page implementation
- Screenshots are automatically captured on test failures
- All test code includes comments for clarity

## Troubleshooting

### Common Issues

1. **Tests fail with timeout errors:**
   - Increase `defaultCommandTimeout` in `cypress.config.js`
   - Check if test URL is accessible

2. **Elements not found:**
   - Verify page structure hasn't changed
   - Update selectors in `ProductPage.js`

3. **Date picker not interacting:**
   - May require custom commands or different interaction approach
   - Check if date picker uses custom components

## Contact

For questions or issues related to this test assignment, please refer to the documentation files or review the test code comments.
