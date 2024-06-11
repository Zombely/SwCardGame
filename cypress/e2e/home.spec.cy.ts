describe('Menu Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the correct heading', () => {
    cy.get('h1').should('contain', 'STAR WARS');
    cy.get('h1').should('contain', 'Card Game');
  });

  it('renders menu items correctly', () => {
    const menuItems = ['Start Game', 'About'];

    menuItems.forEach((menuItem, index) => {
      cy.get('.menu-item').eq(index).find('a').should('contain', menuItem);
    });
  });

  it('navigates to the game route', () => {
    cy.get('.menu-item').eq(0).find('a').click();
    cy.url().should('include', '/game');
  });

  it('navigates to the about route', () => {
    cy.get('.menu-item').eq(1).find('a').click();
    cy.url().should('include', '/about');
  });
});
