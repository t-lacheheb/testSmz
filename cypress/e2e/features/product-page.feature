Feature: Smeetz Product Page Functionality
  As a user
  I want to interact with the Smeetz product page
  So that I can view product details and make bookings

  Background:
    Given I navigate to the Smeetz product page

  @smoke @product-page
  Scenario: Verify Product Page Loads Correctly
    When the page loads
    Then I should see the page title
    And I should see the product information section
    And I should see the booking section
    And I should see the navigation elements
    And the page should be fully functional

  @booking @date-selection
  Scenario: Verify Date Selection and Booking Flow
    Given I am on the product page
    When I interact with the date selector
    Then the date picker should be displayed
    And the booking section should remain visible
    And the booking options should update based on selection

  @booking @quantity
  Scenario: Verify Quantity Selection and Price Calculation
    Given I have selected a date
    When I change the quantity
    Then the quantity value should update correctly
    And the total price should be recalculated
    And invalid quantity inputs should be rejected

