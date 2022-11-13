describe('Home page user flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://first-chair-api.herokuapp.com/api/v1/resorts', {
      statusCode: 200,
      ok: true,
      fixture: 'sampleData'
    });
    cy.visit('http://localhost:3000/')
  })
  
    it('Should have a homepage with a nav bar', () => {
      cy.get('.nav-wrapper').should('exist')
      .get('.name').contains('First Chair Colorado')
      .get('.mountain-icon').should('exist')
    });

    it('Should show nav bar with multiple buttons to navigate page', () => {
      cy.get('.btn-section').should('exist')
      .get('.home-btn-container').contains('Home')
      .get('.about-btn-container').contains('About Us')
      .get('.ikon-btn-container').should('exist')
      .get('.epic-btn-container').should('exist')
    });

    it('Should filter results of the page when the epic or ikon buttons are clicked', () => {
      cy.get('.btn-section').should('exist')
      .get('.btn-section').get('.ikon-btn-container').click()
      .get('.resorts-container').find('.resort-card').should('have.length', 3)
      cy.get('.btn-section').should('exist')
      .get('.btn-section').get('.epic-btn-container').click()
      .get('.resorts-container').find('.resort-card').should('have.length', 0)
    });

    it('Should have a collection of cards with an image, title, and type text visible', () => {
      cy.get('.resorts-container > [href="/1"]').find('.resort-logo').should('have.attr', 'src', 'https://res.cloudinary.com/liftopia/image/upload/b_transparent,c_pad,g_center,h_175,w_263/v1501470630/production/logos/3ff3c543f0a88014efefe64eb5280d14.png')
      cy.get('.resorts-container > [href="/1"]').find('.resort-pass').should('exist')
      cy.get('.resorts-container > [href="/1"]').find('.region').contains('Georgetown, Colorado')
      cy.get('.resorts-container > [href="/2"]').find('.resort-logo').should('have.attr', 'src', 'https://www.coloradoski.com/sites/default/files/inline-images/14_ASC_ASPENMOUNTAIN_Stacked_Black.png')
      cy.get('.resorts-container > [href="/2"]').find('.resort-pass').should('exist')
      cy.get('.resorts-container > [href="/2"]').find('.region').contains('Aspen, Colorado')
      cy.get('.resorts-container > [href="/3"]').find('.resort-logo').should('have.attr', 'src', 'https://www.coloradoski.com/sites/default/files/inline-images/14_ASC_ASPENHIGHLANDS_Stacked_Black.png')
      cy.get('.resorts-container > [href="/3"]').find('.resort-pass').should('exist')
      cy.get('.resorts-container > [href="/3"]').find('.region').contains('Aspen, Colorado')
    });

    it('Should be able to use the browser arrow buttons to go between the main page and individual path page', () => {
      cy.get('.btn-section').get('.ikon-btn-container').click()
        .visit('http://localhost:3000/1').wait(2000)
        .url().should('eq', 'http://localhost:3000/1')
        cy.go('back').reload()
        .url().should('eq', 'http://localhost:3000/')
        cy.go('forward').reload()
        .url().should('eq', 'http://localhost:3000/1')
    });
  
  })
