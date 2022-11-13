
describe('Error handling flows', () => {
  it('Should show error when all resorts cannot be retrieved', () => {
    cy.intercept('GET', 'https://first-chair-api.herokuapp.com/api/v1/resorts', {
      forceNetworkError: true
    }).as('error')
    cy.visit('http://localhost:3000')
    cy.get('.error').contains('Sorry, we are having trouble loading the data. Please try again or check back later!')
  });
});