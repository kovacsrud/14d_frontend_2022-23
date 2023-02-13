describe('Oldal betöltés', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('h1').should('contains.text','Koktél kereső')
    cy.get('.navbar').find('a').should('contains.text','Főoldal')
    cy.get('.navbar').get('.btn').should('have.text','Főoldal')
    cy.get('.menu > li:nth-child(1) > a:nth-child(1)').should('have.text','Kezdőbetű');
    cy.get('.menu > li:nth-child(2) > a:nth-child(1)').should('have.text','Összetevő');
    cy.get('.menu > li:nth-child(3) > a:nth-child(1)').should('have.text','Név');
    
  })
})