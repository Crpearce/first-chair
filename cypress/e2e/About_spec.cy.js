describe('About page user flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://first-chair-api.herokuapp.com/api/v1/resorts', {
      statusCode: 200,
      ok: true,
      fixture: 'sampleData'
    });
    cy.visit('http://localhost:3000/about')
  })

  it('Should take a user to the about page when the about us button is clicked ', () => {
    cy.get('.nav-wrapper').should('exist')
      .get('.name').contains('First Chair Colorado')
      .get('.mountain-icon').should('exist')
    cy.get('.about-container').should('exist')
      .get('.about-photo').should('exist')
    cy.get('.about-text > :nth-child(2)').should('exist')
  });


  it('Should take a user to the home page when the home button is clicked ', () => {
    cy.get('.btn-section').should('exist')
      .get('.btn-section').get('.home-btn-container').click()
      .url().should('eq', 'http://localhost:3000/')
  });
})