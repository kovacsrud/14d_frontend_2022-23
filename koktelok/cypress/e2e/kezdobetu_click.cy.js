describe('Menü működés teszt', () => {

  beforeEach('',()=>{
    cy.visit('http://localhost:5173')
    cy.wait(2000)
  })

  it('Kattintás teszt', () => {
    cy.get('.menu > li:nth-child(1) > a:nth-child(1)').should('have.text','Kezdőbetű').click();
    cy.get('.input').type('a')
    cy.get('button.btn').should('have.text','Keresés').click();
  })
})