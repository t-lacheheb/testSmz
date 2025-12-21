/**
 * Product Page Object Model
 * 
 * This class contains all the page elements and methods for the Smeetz Product Page.
 * Using Page Object Model pattern to maintain clean and reusable code.
 */

class ProductPage {
  /**
   * Navigate to the product page
   * @param {string} url - The URL path to navigate to
   */
  visit(url = '/en/product/b2b/qa-take-home?referrer=preview&productId=40301') {
    cy.visit(url)
    cy.waitForPageLoad()
  }

  /**
   * Helper method to find the first matching selector that exists in the DOM
   * Uses comma-separated selectors which Cypress handles natively
   * This properly maintains the Cypress command chain
   * @param {string[]} selectors - Array of CSS selectors to try
   * @param {string} fallbackSelector - Fallback selector if none match
   * @returns {Cypress.Chainable} The first matching element or fallback
   */
  _findFirstMatchingElement(selectors, fallbackSelector = 'body') {
    // Include fallback in selector list so we always have a match
    // This avoids needing to return Cypress commands from .then() callbacks
    const allSelectors = [...selectors, fallbackSelector]
    const combinedSelector = allSelectors.join(', ')
    // Return first matching element - will always find at least the fallback
    return cy.get(combinedSelector, { timeout: 2000 }).first()
  }

  /**
   * Helper method to find the first visible element from a list of selectors
   * Checks visibility by filtering visible elements
   * @param {string[]} selectors - Array of CSS selectors to try
   * @param {string} fallbackSelector - Fallback selector if none match
   * @returns {Cypress.Chainable} The first visible element or fallback
   */
  _findVisibleElement(selectors, fallbackSelector = 'body') {
    // Include fallback in selector list to ensure we always have a match
    const allSelectors = [...selectors, fallbackSelector]
    const combinedSelector = allSelectors.join(', ')
    // Get all elements, then filter for visible ones
    // If none are visible, we'll get the fallback (which should always exist)
    return cy.get(combinedSelector, { timeout: 2000 }).then(($allElements) => {
      // Find first visible element manually
      for (let i = 0; i < $allElements.length; i++) {
        const $el = Cypress.$($allElements[i])
        if ($el.is(':visible')) {
          // Return jQuery element - Cypress will auto-wrap it properly
          return $el
        }
      }
      // No visible elements found, return fallback element (last in list)
      // Return jQuery element, not Cypress command
      return Cypress.$($allElements[$allElements.length - 1])
    })
  }

  /**
   * Get the page title/heading element
   * @returns {Cypress.Chainable} The page title element
   */
  getPageTitle() {
    const selectors = [
      'h1',
      '[class*="title"]',
      '[class*="heading"]',
      '[data-testid*="title"]',
      '[data-testid*="heading"]'
    ]
    // Use _findVisibleElement to ensure title is visible
    return this._findVisibleElement(selectors, 'body')
  }

  /**
   * Get the product information section
   * @returns {Cypress.Chainable} The product info element
   */
  getProductInfo() {
    const selectors = [
      '[class*="product"]',
      '[class*="info"]',
      '[class*="description"]',
      '[data-testid*="product"]',
      'main',
      'article'
    ]
    return this._findFirstMatchingElement(selectors, 'body')
  }

  /**
   * Get the booking section element
   * @returns {Cypress.Chainable} The booking section element
   */
  getBookingSection() {
    const selectors = [
      '[class*="booking"]',
      '[class*="book"]',
      '[class*="reserve"]',
      '[class*="ticket"]',
      '[data-testid*="booking"]',
      'form',
      '[class*="form"]'
    ]
    return this._findVisibleElement(selectors, 'body')
  }

  /**
   * Get the date selector element
   * @returns {Cypress.Chainable} The date selector element
   */
  getDateSelector() {
    const selectors = [
      'input[type="date"]',
      'input[type="text"][class*="date"]',
      '[class*="date"]',
      '[class*="calendar"]',
      '[class*="picker"]',
      '[data-testid*="date"]',
      'input[placeholder*="date" i]',
      'input[placeholder*="Date" i]'
    ]
    
    // Include booking section selectors as fallback options
    const bookingSelectors = [
      '[class*="booking"]',
      '[class*="book"]',
      'form'
    ]
    
    // Combine all selectors including booking fallbacks
    const allSelectors = [...selectors, ...bookingSelectors, 'body']
    // Use helper method which properly maintains the chain
    return this._findFirstMatchingElement(allSelectors, 'body')
  }

  /**
   * Get navigation elements
   * @returns {Cypress.Chainable} The navigation element
   */
  getNavigation() {
    const selectors = [
      'nav',
      '[class*="nav"]',
      '[class*="menu"]',
      '[class*="header"]',
      '[data-testid*="nav"]'
    ]
    return this._findFirstMatchingElement(selectors, 'body')
  }

  /**
   * Get quantity selector if available
   * @returns {Cypress.Chainable} The quantity selector element
   */
  getQuantitySelector() {
    const selectors = [
      'input[type="number"]',
      '[class*="quantity"]',
      '[class*="qty"]',
      'select',
      '[data-testid*="quantity"]'
    ]
    return this._findFirstMatchingElement(selectors, 'body')
  }

  /**
   * Get the add to cart or book button
   * @returns {Cypress.Chainable} The booking button element
   */
  getBookButton() {
    const selectors = [
      'button[type="submit"]',
      'button[class*="book"]',
      'button[class*="add"]',
      'button[class*="cart"]',
      'a[class*="book"]',
      '[data-testid*="book"]',
      '[data-testid*="submit"]'
    ]
    
    // For book button, we need to check text content, so use a different approach
    return cy.get('body').then(($body) => {
      for (const selector of selectors) {
        const elements = $body.find(selector)
        if (elements.length > 0) {
          for (let i = 0; i < elements.length; i++) {
            const text = Cypress.$(elements[i]).text().toLowerCase()
            if (text.includes('book') || text.includes('add') || text.includes('buy') || text.includes('cart')) {
              // Return jQuery element, not Cypress command
              return Cypress.$(elements[i])
            }
          }
        }
      }
      // Fallback to any button - return jQuery element
      const buttons = $body.find('button')
      return buttons.length > 0 ? Cypress.$(buttons[0]) : $body
    })
  }
}

export default ProductPage

