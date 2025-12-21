# Bug Reports - Smeetz Product Page Testing

**Project:** Smeetz QA Take-Home Assignment  
**Test URL:** https://test-discover.smeetz.com/en/product/b2b/qa-take-home?referrer=preview&productId=40301  
**Date:** 21/12/2025 
**Tester:** Tarek

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

## Catched Bugs

### Bug #1: Payment Methods Section Not Responsive - Payment Methods Cut Off

**Issue Type:** Bug  
**Priority:** Medium  
**Severity:** Medium  
**Component:** Footer / Payment Methods Section  
**Affects Version:** Current  
**Environment:** 
- Browser: Chrome 120.0, Firefox 121.0
- OS: Windows 11
- Screen Resolution: 375x667 (Mobile), 768x1024 (Tablet), 1920x1080 (Desktop), full screen

**Summary:**
The "You can pay with" section in the footer is not responsive, causing some payment method logos to be cut off or hidden on all screen sizes.

**Description:**
The payment methods section displays various payment provider logos (VISA, Mastercard, PayPal, Apple Pay, Google Pay, American Express, Discover, etc.). However, on smaller screen sizes or certain viewport widths, some payment method logos are not visible or are cut off at the edges. This creates a poor user experience as users cannot see all available payment options, potentially reducing trust and conversion rates. The section lacks proper responsive design implementation to ensure all payment methods are visible across all device sizes.

**Steps to Reproduce:**
1. Navigate to https://test-discover.smeetz.com/en/product/b2b/qa-take-home?referrer=preview&productId=40301
2. Wait for the page to fully load
3. Scroll down to the footer section containing "You can pay with"
4. Observe the payment method logos displayed
5. Resize the browser window to different viewport sizes (mobile: 375x667, tablet: 768x1024, desktop: 1920x1080)
6. Check if all payment method logos are visible on each viewport size
7. Verify if any logos are cut off or hidden

**Expected Result:**
- All payment method logos should be visible and fully displayed on all screen sizes
- The payment methods section should be responsive and adapt to different viewport widths
- No payment logos should be cut off or hidden at the edges
- Users should be able to see all available payment options regardless of device

**Actual Result:**
- Some payment method logos are not visible on smaller screen sizes
- Payment logos are cut off or hidden at the edges on certain viewport widths
- The section does not properly adapt to different screen sizes
- Users cannot see all available payment options on mobile and tablet devices

**Attachments:**
- Screenshot: bug-004-payment-methods-not-responsive.png
- Test Evidence: Automated test scenarios in `cypress/e2e/features/product-page.feature` (Bug - Payment Methods Section Not Responsive)
- Console Errors: None observed
- Network Logs: N/A

**Additional Information:**
- Frequency: Always (100% reproducible on mobile and tablet viewports)
- Workaround: Users can zoom out or use desktop view, but this is not ideal for mobile users
- Related Issues: May be related to CSS overflow or flexbox/grid layout issues
- Impact: Medium - Affects user trust and may reduce conversion rates as users cannot see all payment options

---

### Bug #5: Book Button Shows "Sold Out" Instead of Allowing Booking

**Issue Type:** Bug  
**Priority:** High  
**Severity:** High  
**Component:** Booking Widget / Book Button  
**Affects Version:** Current  
**Environment:** 
- Browser: Chrome 120.0, Firefox 121.0
- OS: Windows 11
- Screen Resolution: All resolutions

**Summary:**
When clicking the "Book" button on the product page, users see a "Sold out" message instead of being able to proceed with booking, even though the product appears to be available for booking.

**Description:**
Users expect to be able to book a product when clicking the "Book" button. However, after clicking the button, a "Sold out" message appears, preventing users from completing their booking. This creates confusion and frustration as the button is clickable and appears functional, but does not allow the expected booking flow. The issue may be related to incorrect availability checking, stale data, or a UI state management problem where the button state does not accurately reflect product availability.

**Steps to Reproduce:**
1. Navigate to https://test-discover.smeetz.com/en/product/b2b/qa-take-home?referrer=preview&productId=40301
2. Wait for the page to fully load
3. Locate the "Book" button in the booking section
4. Verify that the button is visible and appears clickable
5. Click on the "Book" button
6. Observe the result after clicking

**Expected Result:**
- After clicking the "Book" button, users should be able to proceed with the booking process
- The booking flow should continue (e.g., redirect to booking page, show booking form, or proceed to next step)
- No "Sold out" message should appear if the product is available for booking
- The button should accurately reflect the product's availability status

**Actual Result:**
- After clicking the "Book" button, a "Sold out" message appears
- Users cannot proceed with booking
- The booking flow is blocked
- The button does not accurately reflect the product's actual availability status

**Attachments:**
- Screenshot: bug-005-book-button-shows-sold-out.png
- Test Evidence: Automated test scenarios in `cypress/e2e/features/product-page.feature` (Bug - Book Button Shows Sold Out Instead of Allowing Booking)
- Console Errors: [Check browser console for any JavaScript errors]
- Network Logs: [Check network tab for failed API calls related to availability]

**Additional Information:**
- Frequency: Always (100% reproducible)
- Workaround: None identified - booking is completely blocked
- Related Issues: May be related to product availability API, state management, or incorrect product ID mapping
- Impact: High - This is a critical bug that completely blocks the primary user action (booking) and directly impacts business revenue
- Business Impact: Users cannot complete bookings, leading to lost sales and poor user experience

---