# Bug Reports - Smeetz Product Page Testing

**Project:** Smeetz QA Take-Home Assignment  
**Test URL:** https://test-discover.smeetz.com/en/product/b2b/qa-take-home?referrer=preview&productId=40301  
**Date:** [Date of Testing]  
**Tester:** [Tester Name]

---

## Bug Report Template (Jira Format)

### Bug #1: [Bug Title]

**Issue Type:** Bug  
**Priority:** [Low/Medium/High]  
**Severity:** [Low/Medium/High/Critical]  
**Component:** [Component Name]  
**Affects Version:** [Version if known]  
**Environment:** 
- Browser: [Browser and Version]
- OS: [Operating System]
- Screen Resolution: [Resolution]

**Summary:**
[Brief one-line description of the bug]

**Description:**
[Detailed description of the bug, what happened, and the impact on the user experience]

**Steps to Reproduce:**
1. [Step 1]
2. [Step 2]
3. [Step 3]
4. [Continue as needed...]

**Expected Result:**
[What should happen when following the steps]

**Actual Result:**
[What actually happens when following the steps]

**Attachments:**
- Screenshot: [Screenshot filename or path]
- Console Errors: [Any console errors if applicable]
- Network Logs: [If applicable]

**Additional Information:**
- Frequency: [Always/Sometimes/Rarely]
- Workaround: [If any workaround exists]
- Related Issues: [If any]

---

## Example Bug Reports

### Bug #1: Date Picker Not Opening on Mobile Devices

**Issue Type:** Bug  
**Priority:** High  
**Severity:** High  
**Component:** Booking Widget  
**Affects Version:** Current  
**Environment:** 
- Browser: Safari iOS 16.0
- OS: iOS 16.0
- Screen Resolution: 375x667

**Summary:**
Date picker does not open when tapped on mobile Safari browser, preventing users from selecting booking dates.

**Description:**
When accessing the product page on mobile Safari, users are unable to open the date picker by tapping on the date selection field. The field appears to be clickable but no calendar widget appears. This blocks the entire booking flow on mobile devices.

**Steps to Reproduce:**
1. Open Safari browser on iOS device
2. Navigate to https://test-discover.smeetz.com/en/product/b2b/qa-take-home?referrer=preview&productId=40301
3. Wait for page to load
4. Scroll to booking section
5. Tap on the date selection field
6. Observe that date picker does not open

**Expected Result:**
Date picker calendar should open when tapping on the date selection field, allowing users to select a booking date.

**Actual Result:**
No date picker appears when tapping on the date selection field. The field highlights briefly but no calendar widget is displayed.

**Attachments:**
- Screenshot: bug-001-date-picker-mobile.png
- Console Errors: None observed
- Network Logs: N/A

**Additional Information:**
- Frequency: Always (100% reproducible on mobile Safari)
- Workaround: None identified
- Related Issues: None

---

### Bug #2: Price Calculation Error When Quantity Exceeds Maximum

**Issue Type:** Bug  
**Priority:** Medium  
**Severity:** Medium  
**Component:** Booking Widget / Price Calculator  
**Affects Version:** Current  
**Environment:** 
- Browser: Chrome 120.0
- OS: macOS 14.0
- Screen Resolution: 1920x1080

**Summary:**
Total price displays incorrect value when quantity is increased beyond the maximum allowed limit.

**Description:**
When users attempt to increase the ticket quantity beyond the maximum allowed (e.g., 10 tickets), the quantity selector allows the value to exceed the limit, and the price calculation shows an incorrect total. The system should prevent quantity from exceeding the maximum and display an appropriate error message.

**Steps to Reproduce:**
1. Navigate to the product page
2. Select an available date
3. Locate the quantity selector
4. Click the "+" button repeatedly until quantity exceeds maximum (if maximum is 10, click until it shows 11 or more)
5. Observe the total price calculation
6. Verify if any error message is displayed

**Expected Result:**
- Quantity should not exceed the maximum allowed limit
- If user attempts to exceed limit, an error message should be displayed
- Total price should only calculate for valid quantities

**Actual Result:**
- Quantity selector allows values beyond maximum limit
- Total price calculates incorrectly for invalid quantities
- No error message is displayed to inform the user

**Attachments:**
- Screenshot: bug-002-price-calculation-error.png
- Console Errors: [Any JavaScript errors if present]
- Network Logs: N/A

**Additional Information:**
- Frequency: Always (when attempting to exceed maximum)
- Workaround: Manually reduce quantity to valid range
- Related Issues: None

---

### Bug #3: Page Loads Slowly on Initial Visit

**Issue Type:** Bug  
**Priority:** Low  
**Severity:** Low  
**Component:** Performance  
**Affects Version:** Current  
**Environment:** 
- Browser: Chrome 120.0
- OS: Windows 11
- Screen Resolution: 1920x1080
- Network: 50 Mbps

**Summary:**
Product page takes more than 5 seconds to fully load on initial visit, impacting user experience.

**Description:**
When first visiting the product page, the page takes approximately 7-8 seconds to fully load all content, including images and interactive elements. This exceeds the recommended 3-5 second load time for optimal user experience. The delay is particularly noticeable on slower network connections.

**Steps to Reproduce:**
1. Clear browser cache and cookies
2. Open browser developer tools (Network tab)
3. Navigate to https://test-discover.smeetz.com/en/product/b2b/qa-take-home?referrer=preview&productId=40301
4. Observe the page load time in Network tab
5. Wait until all resources are loaded
6. Note the total load time

**Expected Result:**
Page should load completely within 3-5 seconds on a standard broadband connection (50+ Mbps).

**Actual Result:**
Page takes 7-8 seconds to fully load all resources, including images, scripts, and stylesheets. Some content appears progressively, but interactive elements are not available until full load completes.

**Attachments:**
- Screenshot: bug-003-slow-load-time.png
- Console Errors: None
- Network Logs: Network waterfall screenshot showing slow resource loading

**Additional Information:**
- Frequency: Always on initial visit (subsequent visits are faster due to caching)
- Workaround: Wait for page to fully load before interacting
- Related Issues: May be related to unoptimized images or excessive API calls

---

## Bug Summary Statistics

| Bug ID | Title | Severity | Status | Priority |
|--------|-------|----------|--------|----------|
| Bug #1 | Date Picker Not Opening on Mobile | High | Open | High |
| Bug #2 | Price Calculation Error | Medium | Open | Medium |
| Bug #3 | Slow Page Load Time | Low | Open | Low |

**Total Bugs Found:** [Number]  
**High Severity:** [Number]  
**Medium Severity:** [Number]  
**Low Severity:** [Number]

---

## Notes

- All bugs have been documented with screenshots and detailed reproduction steps
- Bugs are prioritized based on impact on user experience and business functionality
- Retesting will be performed after bug fixes are implemented

