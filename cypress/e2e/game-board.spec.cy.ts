describe('Board Page Vehicles', () => {
  beforeEach(() => {
    cy.visit('/game/play/Vehicles');
  });

  it('should display the score', () => {
    cy.get('.score').should('be.visible');
  });

  it('should display the board container', () => {
    cy.get('.board-container').should('be.visible');
  });

  it('should display the player and enemy cards', () => {
    cy.get('.card-wrapper').should('have.length', 2);
  });

  it('should display the fight button', () => {
    cy.get('.round-button-wrapper button').should('contain', 'Fight!');
  });

  it('should display the next round button after a fight', () => {
    cy.get('.round-button-wrapper button').click();
    cy.get('.round-button-wrapper button').should('contain', 'Next Round');
  });

  it('should display the next round button after a fight and click new round againg', () => {
    cy.get('.round-button-wrapper button').click();
    cy.get('.round-button-wrapper button').should('contain', 'Next Round');

    cy.get('.round-button-wrapper button').click();
    cy.get('.round-button-wrapper button').should('contain', 'Fight!');

    cy.get('.round-button-wrapper button').click();
    cy.get('.round-button-wrapper button').should('contain', 'Next Round');
  });

  it('should display the winner after a fight', () => {
    cy.get('.round-button-wrapper button').click();
    cy.get('.winner').should('be.visible');
  });

  it('should contain a go back button', () => {
    cy.get('app-go-back-button').should('exist');
  });

  it('should navigate back to the deck picker when the go back button is clicked', () => {
    cy.get('#go-back-anchor').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/game`);
  });
});

describe('Board Page People', () => {
  beforeEach(() => {
    cy.visit('/game/play/People');
  });

  it('should display the score', () => {
    cy.get('.score').should('be.visible');
  });

  it('should display the board container', () => {
    cy.get('.board-container').should('be.visible');
  });

  it('should display the player and enemy cards', () => {
    cy.get('.card-wrapper').should('have.length', 2);
  });

  it('should display the fight button', () => {
    cy.get('.round-button-wrapper button').should('contain', 'Fight!');
  });

  it('should display the next round button after a fight', () => {
    cy.get('.round-button-wrapper button').click();
    cy.get('.round-button-wrapper button').should('contain', 'Next Round');
  });

  it('should display the next round button after a fight and click new round againg', () => {
    cy.get('.round-button-wrapper button').click();
    cy.get('.round-button-wrapper button').should('contain', 'Next Round');

    cy.get('.round-button-wrapper button').click();
    cy.get('.round-button-wrapper button').should('contain', 'Fight!');

    cy.get('.round-button-wrapper button').click();
    cy.get('.round-button-wrapper button').should('contain', 'Next Round');
  });

  it('should display the winner after a fight', () => {
    cy.get('.round-button-wrapper button').click();
    cy.get('.winner').should('be.visible');
  });

  it('should contain a go back button', () => {
    cy.get('app-go-back-button').should('exist');
  });

  it('should navigate back to the deck picker when the go back button is clicked', () => {
    cy.get('#go-back-anchor').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/game`);
  });
});

describe('Board Page Starships', () => {
  beforeEach(() => {
    cy.visit('/game/play/Starships');
  });

  it('should display the score', () => {
    cy.get('.score').should('be.visible');
  });

  it('should display the board container', () => {
    cy.get('.board-container').should('be.visible');
  });

  it('should display the player and enemy cards', () => {
    cy.get('.card-wrapper').should('have.length', 2);
  });

  it('should display the fight button', () => {
    cy.get('.round-button-wrapper button').should('contain', 'Fight!');
  });

  it('should display the next round button after a fight', () => {
    cy.get('.round-button-wrapper button').click();
    cy.get('.round-button-wrapper button').should('contain', 'Next Round');
  });

  it('should display the next round button after a fight and click new round againg', () => {
    cy.get('.round-button-wrapper button').click();
    cy.get('.round-button-wrapper button').should('contain', 'Next Round');

    cy.get('.round-button-wrapper button').click();
    cy.get('.round-button-wrapper button').should('contain', 'Fight!');

    cy.get('.round-button-wrapper button').click();
    cy.get('.round-button-wrapper button').should('contain', 'Next Round');
  });

  it('should display the winner after a fight', () => {
    cy.get('.round-button-wrapper button').click();
    cy.get('.winner').should('be.visible');
  });

  it('should contain a go back button', () => {
    cy.get('app-go-back-button').should('exist');
  });

  it('should navigate back to the deck picker when the go back button is clicked', () => {
    cy.get('#go-back-anchor').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/game`);
  });
});
