describe('Deck Picker Page', () => {
  beforeEach(() => {
    cy.visit('/game');
  });

  it('should display the correct heading', () => {
    cy.get('.deck-picker-container h1').should('contain', 'Select your deck');
  });

  it('should display deck options', () => {
    cy.get('.decks-container .deck').should('have.length.greaterThan', 0);
  });

  it('should navigate to the correct game page when a deck is clicked', () => {
    cy.get('.decks-container .deck')
      .first()
      .then(($deck) => {
        const expectedUrl = $deck.prop('href');
        cy.wrap($deck).click();
        cy.url().should('equal', expectedUrl);
      });
  });

  it('should display deck details when hovered', () => {
    cy.get('.decks-container .deck').first().trigger('mouseenter');
    cy.get('.deck-contents').should('be.visible');
  });

  it('should contain a go back button', () => {
    cy.get('app-go-back-button').should('exist');
  });

  it('should navigate back to the home page when the go back button is clicked', () => {
    cy.get('#go-back-anchor').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
});
