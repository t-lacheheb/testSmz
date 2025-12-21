# Manual Test Cases - Smeetz Product Page

**Test URL:** https://test-discover.smeetz.com/en/product/b2b/qa-take-home?referrer=preview&productId=40301

**Date:** [Date of Testing]  
**Tester:** [Tester Name]  
**Browser:** [Browser and Version]

---

## Test Case 1: Verify Product Page Loads and Displays Correctly

**Test Case ID:** TC-MANUAL-001  
**Priority:** High  
**Type:** Functional Testing

### Description
Verify that the product page loads successfully and displays all essential information including product details, pricing, booking options, and navigation elements.

### Preconditions
- User has internet connection
- Browser is updated to latest version
- User navigates to the test URL

### Test Steps
1. Open browser and navigate to: https://test-discover.smeetz.com/en/product/b2b/qa-take-home?referrer=preview&productId=40301
2. Wait for page to fully load (observe loading indicators)
3. Verify page title/heading is displayed
4. Verify product name/title is visible
5. Verify product description or details are present
6. Verify pricing information is displayed (if applicable)
7. Verify booking section/widget is visible
8. Verify navigation menu/header is present
9. Verify footer is present (if applicable)
10. Check for any broken images or missing assets

### Expected Result
- Page loads within acceptable time (< 5 seconds)
- All elements are displayed correctly
- No console errors in browser developer tools
- Page is responsive and elements are properly aligned
- All images and assets load successfully

### Actual Result
[To be filled during test execution]

### Status
- [ ] Pass
- [ ] Fail
- [ ] Blocked

### Screenshots
[Attach screenshots if applicable]

---

## Test Case 2: Verify Date Selection and Availability Check

**Test Case ID:** TC-MANUAL-002  
**Priority:** High  
**Type:** Functional Testing

### Description
Verify that users can select dates for booking and the system correctly displays availability and updates booking options based on the selected date.

### Preconditions
- User is on the product page
- Date selection functionality is available

### Test Steps
1. Navigate to the product page
2. Locate the date selection field/calendar widget
3. Click on the date selector to open date picker (if applicable)
4. Select a date from the calendar (try both available and unavailable dates)
5. Verify the selected date is highlighted/displayed
6. Verify availability status is shown for the selected date
7. Verify booking options (time slots, quantity, etc.) update based on selected date
8. Try selecting a different date
9. Verify the booking section updates accordingly
10. Check if past dates are disabled (if applicable)

### Expected Result
- Date picker opens/clicks correctly
- Selected date is clearly indicated
- Availability information is displayed accurately
- Booking options update dynamically based on date selection
- Past dates are disabled or not selectable
- System handles date changes smoothly without errors

### Actual Result
[To be filled during test execution]

### Status
- [ ] Pass
- [ ] Fail
- [ ] Blocked

### Screenshots
[Attach screenshots if applicable]

---

## Test Case 3: Verify Quantity Selection and Price Calculation

**Test Case ID:** TC-MANUAL-003  
**Priority:** Medium  
**Type:** Functional Testing

### Description
Verify that users can select ticket quantities and the system correctly calculates and displays the total price based on the selected quantity and any applicable discounts or fees.

### Preconditions
- User is on the product page
- A date has been selected (if required)
- Product has quantity selection option

### Test Steps
1. Navigate to the product page
2. Select a date (if required for quantity selection)
3. Locate the quantity selector (dropdown, +/- buttons, or input field)
4. Verify initial quantity is set (usually 1)
5. Increase quantity using + button or dropdown
6. Verify quantity value updates correctly
7. Verify unit price is displayed (if shown)
8. Verify total price updates based on quantity
9. Decrease quantity using - button or dropdown
10. Verify quantity cannot go below minimum (usually 1)
11. Try entering quantity manually (if input field)
12. Verify invalid inputs are handled (negative numbers, text, etc.)
13. Check if maximum quantity limit is enforced (if applicable)
14. Verify any discounts or fees are calculated correctly

### Expected Result
- Quantity selector is functional and responsive
- Quantity increases/decreases correctly
- Total price updates accurately in real-time
- Minimum and maximum quantity limits are enforced
- Invalid inputs are rejected with appropriate error messages
- Price calculation includes all applicable fees and discounts
- UI updates smoothly without page refresh

### Actual Result
[To be filled during test execution]

### Status
- [ ] Pass
- [ ] Fail
- [ ] Blocked

### Screenshots
[Attach screenshots if applicable]

---

## Additional Notes

### Browser Compatibility Testing
- [ ] Chrome (Latest)
- [ ] Firefox (Latest)
- [ ] Safari (Latest)
- [ ] Edge (Latest)

### Responsive Design Testing
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

### Performance Observations
- Page load time: _____ seconds
- Time to interactive: _____ seconds
- Any performance issues observed: _____

