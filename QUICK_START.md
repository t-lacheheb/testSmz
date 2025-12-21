# Quick Start Guide

## Installation (One-time Setup)

```bash
# Install dependencies
npm install
```

## Running Tests

### Option 1: Interactive Mode (Recommended for first-time users)
```bash
npm run cypress:open
```
- Opens Cypress Test Runner
- Select test file to run
- Watch tests execute in real-time

### Option 2: Headless Mode (CI/CD)
```bash
npm run cypress:run
```
- Runs all tests in headless mode
- Generates screenshots and videos
- Outputs results to terminal

## Test Files Location

- **Automated Tests:** `cypress/e2e/smeetz-product-page.cy.js`
- **Manual Test Cases:** `MANUAL_TEST_CASES.md`
- **Bug Reports:** `BUG_REPORTS.md`
- **Page Objects:** `cypress/support/pages/ProductPage.js`

## Quick Test Execution Checklist

- [ ] Install dependencies: `npm install`
- [ ] Verify Cypress: `npx cypress verify`
- [ ] Run tests: `npm run cypress:run`
- [ ] Review results in terminal
- [ ] Check screenshots: `cypress/screenshots/`
- [ ] Review videos: `cypress/videos/`
- [ ] Document actual results in test files
- [ ] Report bugs in `BUG_REPORTS.md`

## Test URL

https://test-discover.smeetz.com/en/product/b2b/qa-take-home?referrer=preview&productId=40301

## Need Help?

Refer to `README.md` for detailed documentation.

