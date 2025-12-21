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

  @organiser @link
  Scenario: Verify Organiser Link is Accessible
    Given I am on the product page
    When I look for the organiser link
    Then the organiser link should be visible
    And the organiser link should be clickable
    And the organiser link should have a valid href

  @booking @book-button @bug
  Scenario: Bug - Book Button Should Allow Booking But Shows Sold Out
    Given I am on the product page
    When I click on the Book button
    Then I should be able to proceed with booking
    But the actual result shows "Sold out" message appears instead



  @bug @responsive @payment-methods
  Scenario: Bug - Payment Methods Section Not Responsive
    Given I am on the product page
    When I scroll to the payment methods section
    And I view the page on different screen sizes
    Then all payment method logos should be visible
    And payment methods should not be cut off or hidden
    And the payment section should be responsive across all viewports

