describe('Single Resort details user flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://first-chair-api.herokuapp.com/api/v1/resorts', {
      statusCode: 200,
      ok: true,
      fixture: 'sampleData'
    });
    cy.visit('http://localhost:3000/2')
  });

  it('Should have a homepage with a nav bar', () => {
    cy.get('.nav-wrapper').should('exist')
    .get('.name').contains('First Chair Colorado')
    .get('.mountain-icon').should('exist')
  });

  it('Should show a detail page for a ski resort', () => {
    cy.get('.flex-wrapper').should('exist')
      .get('.details-title').contains('Aspen')
      .get('.trail-map').should('have.attr', 'src', 'https://cdn.ski/QtK48fotJauPfoyW.jpeg')
      .get('.details-town').contains('Aspen, Colorado')
      .get('.resort-scripts').should('exist')
      .get('.resort-overview').contains('Aspen is part of an expansive winter playground with four unique neighbouring mountains (Aspen, Aspen Highlands, Snowmass and Butternut) with 5,527 total acres of terrain. Aspen Mountain has been the place to go since 1947 for ski holidays in Colorado.')
      .get('.list-section > :nth-child(1)').contains('Hours from Denver: 4')
      .get('.list-section > :nth-child(2)').contains('Trails: 76')
      .get('.list-section > :nth-child(3)').contains('Acres: 675')
      .get('.list-section > :nth-child(4)').contains('Summit Elevation: 11212')
      .get('.list-section > :nth-child(5)').contains('Vertical feet: 3267')
      .get('.snowfall-container').should('exist')
      .get('.snowfall-container > :nth-child(1)').contains('Annual snowfall')
      .get('.details-tickets').should('exist')
      .get('.details-web').should('exist')
  });

});
