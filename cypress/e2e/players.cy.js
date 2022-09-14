context('Players features', () => {
  before(() => {
    // Go to root URL
    cy.visit('/')
  })

  it('Listing players', () => {
    cy.get('table tbody tr')
    .should('not.have.length', 0);
  })
  
  it('Creating new player', () => {
    cy.get('table tbody tr').then(element => {
      // Total elements
      const items = element.length
      // Reset formulary
      cy.get('form input[name="name"]').clear()
      cy.get('form input[name="team"]').clear()
      cy.get('form input[name="score"]').clear()
      // Completing formulary
      cy.get('form input[name="name"]').type('Name1')
      cy.get('form input[name="team"]').type('Team1')
      cy.get('form input[name="score"]').type('10')
      // Sending form
      cy.get('form button[type="submit"]').click()

      // Wait 3 seconds before compare
      cy.wait(3000)

      cy.get('table tbody tr').its('length').should('eq', items + 1)
    })
  })

  it('Deleting player', () => {
    cy.get('table tbody tr').then(element => {
      // Total elements
      const items = element.length
      // Deleting first item
      cy.get('table tbody tr:first-child button').click()
      // Wait 3 seconds before compare
      cy.wait(3000)

      cy.get('table tbody tr').its('length').should('eq', items - 1)
    })
  })
})
