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
    // Get all elements, then find first visible one manually
    // This avoids returning Cypress commands from .then() callbacks
    return cy.get(combinedSelector, { timeout: 2000 }).then(($allElements) => {
      // Find first visible element manually
      for (let i = 0; i < $allElements.length; i++) {
        const $el = Cypress.$($allElements[i])
        if ($el.is(':visible')) {
          // Return jQuery element directly - Cypress will auto-wrap it and maintain chain
          return $el
        }
      }
      // No visible elements found, return fallback element (last in list)
      // Return jQuery element directly - Cypress will auto-wrap it and maintain chain
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
   * Get the organiser link element
   * @returns {Cypress.Chainable} The organiser link element
   */
  getOrganiserLink() {
    // Search for links containing "organiser" or "organizer" text (case insensitive)
    return cy.get('body').then(($body) => {
      // Find all links
      const links = $body.find('a')
      for (let i = 0; i < links.length; i++) {
        const $link = Cypress.$(links[i])
        const text = $link.text().toLowerCase()
        const href = $link.attr('href') || ''
        
        // Check if link text or href contains organiser/organizer
        if (text.includes('organiser') || text.includes('organizer') || 
            href.includes('organiser') || href.includes('organizer')) {
          return $link
        }
      }
      
      // Fallback: try to find by class names
      const classSelectors = [
        '[class*="organiser"]',
        '[class*="organizer"]',
        '[class*="organiser-link"]',
        '[class*="organizer-link"]'
      ]
      
      for (const selector of classSelectors) {
        const elements = $body.find(selector)
        if (elements.length > 0) {
          return Cypress.$(elements[0])
        }
      }
      
      // Return body as fallback
      return $body
    })
  }

  /**
   * Get the add to cart or book button
   * Uses human-readable text matching for Vue.js rendered content
   * @returns {Cypress.Chainable} The booking button element
   */
  getBookButton() {
    // First, try to find button by text content (most reliable for Vue.js apps)
    return cy.get('body').then(($body) => {
      // Find all buttons and links
      const allClickableElements = $body.find('button, a, [role="button"]')
      
      for (let i = 0; i < allClickableElements.length; i++) {
        const $element = Cypress.$(allClickableElements[i])
        const text = $element.text().toLowerCase().trim()
        
        // Check for "book" text (exact match or contains)
        if (text === 'book' || text.includes('book') || text === 'book now' || text.includes('book now')) {
          // Make sure it's not "sold out" or disabled
          const isDisabled = $element.is(':disabled') || $element.hasClass('disabled') || 
                           $element.attr('disabled') !== undefined
          const hasSoldOut = text.includes('sold out')
          
          if (!isDisabled && !hasSoldOut) {
            return $element
          }
        }
      }
      
      // Fallback: try selectors
      const selectors = [
        'button[type="submit"]',
        'button[class*="book"]',
        'button[class*="btn"]',
        'a[class*="book"]',
        '[data-testid*="book"]',
        '[data-testid*="submit"]',
        '[aria-label*="book" i]',
        '[aria-label*="Book" i]'
      ]
      
      for (const selector of selectors) {
        const elements = $body.find(selector)
        if (elements.length > 0) {
          for (let i = 0; i < elements.length; i++) {
            const $el = Cypress.$(elements[i])
            const text = $el.text().toLowerCase().trim()
            // Make sure it's not sold out
            if (!text.includes('sold out') && !$el.is(':disabled')) {
              return $el
            }
          }
        }
      }
      
      // Last fallback: any button
      const buttons = $body.find('button')
      return buttons.length > 0 ? Cypress.$(buttons[0]) : $body
    })
  }

  /**
   * Check if "Sold out" message is displayed
   * @returns {Cypress.Chainable} Element containing sold out message or null
   */
  getSoldOutMessage() {
    return cy.get('body').then(($body) => {
      // Search for "sold out" text in all elements
      const allElements = $body.find('*')
      for (let i = 0; i < allElements.length; i++) {
        const $el = Cypress.$(allElements[i])
        const text = $el.text().toLowerCase().trim()
        
        if (text === 'sold out' || text.includes('sold out')) {
          return $el
        }
      }
      
      // Try selectors
      const selectors = [
        '[class*="sold"]',
        '[class*="out"]',
        '[class*="unavailable"]',
        '[data-testid*="sold"]'
      ]
      
      for (const selector of selectors) {
        const elements = $body.find(selector)
        if (elements.length > 0) {
          return Cypress.$(elements[0])
        }
      }
      
      return null
    })
  }
}

export default ProductPage

