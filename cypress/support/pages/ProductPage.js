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
   * Get the page title/heading element
   * @returns {Cypress.Chainable} The page title element
   */
  getPageTitle() {
    // Try multiple selectors as page structure may vary
    return cy.get('body').then(($body) => {
      // Check for common heading patterns
      const selectors = [
        'h1',
        '[class*="title"]',
        '[class*="heading"]',
        '[data-testid*="title"]',
        '[data-testid*="heading"]'
      ]
      
      for (const selector of selectors) {
        const element = $body.find(selector).first()
        if (element.length > 0 && element.is(':visible')) {
          return cy.get(selector).first()
        }
      }
      // Fallback to body if no specific title found
      return cy.get('body')
    })
  }

  /**
   * Get the product information section
   * @returns {Cypress.Chainable} The product info element
   */
  getProductInfo() {
    // Look for product information containers
    const selectors = [
      '[class*="product"]',
      '[class*="info"]',
      '[class*="description"]',
      '[data-testid*="product"]',
      'main',
      'article'
    ]
    
    return cy.get('body').then(($body) => {
      for (const selector of selectors) {
        const element = $body.find(selector).first()
        if (element.length > 0) {
          return cy.get(selector).first()
        }
      }
      return cy.get('body')
    })
  }

  /**
   * Get the booking section element
   * @returns {Cypress.Chainable} The booking section element
   */
  getBookingSection() {
    // Look for booking-related elements
    const selectors = [
      '[class*="booking"]',
      '[class*="book"]',
      '[class*="reserve"]',
      '[class*="ticket"]',
      '[data-testid*="booking"]',
      'form',
      '[class*="form"]'
    ]
    
    return cy.get('body').then(($body) => {
      for (const selector of selectors) {
        const elements = $body.find(selector)
        if (elements.length > 0) {
          // Return the first visible element
          for (let i = 0; i < elements.length; i++) {
            if (Cypress.$(elements[i]).is(':visible')) {
              return cy.get(selector).eq(i)
            }
          }
        }
      }
      return cy.get('body')
    })
  }

  /**
   * Get the date selector element
   * @returns {Cypress.Chainable} The date selector element
   */
  getDateSelector() {
    // Look for date picker elements
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
    
    return cy.get('body').then(($body) => {
      for (const selector of selectors) {
        const element = $body.find(selector).first()
        if (element.length > 0) {
          return cy.get(selector).first()
        }
      }
      // Fallback to booking section
      return this.getBookingSection()
    })
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
    
    return cy.get('body').then(($body) => {
      for (const selector of selectors) {
        const element = $body.find(selector).first()
        if (element.length > 0) {
          return cy.get(selector).first()
        }
      }
      return cy.get('body')
    })
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
    
    return cy.get('body').then(($body) => {
      for (const selector of selectors) {
        const element = $body.find(selector).first()
        if (element.length > 0) {
          return cy.get(selector).first()
        }
      }
      return cy.get('body')
    })
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
    
    return cy.get('body').then(($body) => {
      for (const selector of selectors) {
        const elements = $body.find(selector)
        if (elements.length > 0) {
          for (let i = 0; i < elements.length; i++) {
            const text = Cypress.$(elements[i]).text().toLowerCase()
            if (text.includes('book') || text.includes('add') || text.includes('buy') || text.includes('cart')) {
              return cy.get(selector).eq(i)
            }
          }
        }
      }
      // Fallback to any button
      return cy.get('button').first()
    })
  }
}

export default ProductPage

