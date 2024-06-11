describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('should display the correct heading', () => {
    cy.get('.about-container h1').should('contain', 'About:');
  });

  it('should contain a link to the Star Wars API', () => {
    cy.get('#swapi-link')
      .should('have.attr', 'href', 'https://www.swapi.tech/')
      .and('contain', 'SWAPI');
  });

  it('should contain a go back button', () => {
    cy.get('app-go-back-button').should('exist');
  });

  it('should navigate back to the home page when the go back button is clicked', () => {
    cy.get('#go-back-anchor').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
});
