describe('Tethys home page', () => {
  const API_BASE_URL = 'https://7jwcjesxi6.execute-api.us-east-1.amazonaws.com/latest';

  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('displays the main site content', () => {
    cy.contains('A decentralized network based on blockchain technology powering NextGen Semantic Web')
      .should('be.visible');
  });

  context('when user completes the subscribe form', () => {
    it('calls the create subscriber API', () => {
      cy.server();
      cy.route('POST', `${API_BASE_URL}/subscribers`, {}).as('createSubscriber');

      cy.get('input[name="email"]').type('test@example.com');
      cy.get('select[name="country"]').select('CAN');
      cy.contains('Submit').click();

      cy.wait('@createSubscriber');

      cy.contains('Thanks for subscribing').should('be.visible');
    });
  });
});
