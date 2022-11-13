describe('About page user flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://first-chair-api.herokuapp.com/api/v1/resorts', {
      statusCode: 200,
      ok: true,
      fixture: 'sampleData'
    });
    cy.intercept('GET', 'https://first-chair-api.herokuapp.com/api/v1/runs', {
      statusCode: 200,
      ok: true,
      fixture: 'sampleRuns'
    });
    cy.visit('http://localhost:3000/ticklist')
  })

  it('Should show a user both the form and added runs list when visiting the page', () => {
    cy.get('.form-container').should('exist')
      .get('.runs-container > :nth-child(1)').should('exist')
      .get('.runs-container > :nth-child(2)').should('exist')
      .get('.runs-container > :nth-child(3)').should('exist')
      .get('.runs-container > :nth-child(4)').should('not.exist')
  })

  it('should render all inputs and buttons required for a user to add a run', () => {
    cy.get('.form-resort').should('exist')
      .get('.form-run').should('exist')
      .get('.form-difficulty').should('exist')
      .get('.add-run-btn').should('exist')
  })

  it('should be able to fill out the form and see the data posted when the submit button is clicked', () => {
    cy.get('.form-resort').type('Vail')
      .get('.form-resort').should('have.value', 'Vail')
    cy.get('.form-run').type('Lovers Leap')
      .get('.form-run').should('have.value', 'Lovers Leap')
    cy.get('.form-difficulty').type('Black Diamond')
      .get('.form-difficulty').should('have.value', 'Black Diamond')
    cy.get('.form-container').get('.add-run-btn').click()
      .get('.runs-container > :nth-child(4)').should('exist')
  })

})