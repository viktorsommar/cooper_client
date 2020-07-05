describe('User can navigate the app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })

  it('to Cooper Test tab', () => {
    cy.get('#cooper-tab').click();

    cy.get('#cooper-header').should('contain', 'Cooper Test');
    
    cy.get('#bmi-header').should('not.exist')
  })

  it('to BMI Calculator tab', () => {
    cy.get('#bmi-tab').click()

    cy.get('#bmi-header').should('contain', 'BMI Calculator')

    cy.get('#cooper-header').should('not.exist');
  })

  it('back to Cooper Test tab', () => {
    cy.get('#cooper-tab').click();

    cy.get('#cooper-header').should('contain', 'Cooper Test');

    cy.get('#bmi-header').should('not.exist')
  })
})