describe('template spec', () => {

  beforeEach('',()=>{
    cy.visit('http://localhost:5173')
  })

  it('Fejléc teszt', () => {
    cy.get('h1').should('contains.text','Koktél kereső')
  })

  it('Navbar megjelenik',()=>{
    cy.get('.navbar').find('a').should('contains.text','Főoldal')
  })

  it('Főoldal szöveg a helyén van',()=>{
    cy.get('.navbar').get('.btn').should('have.text','Főoldal')
  })

  it('Kezdőbetű szöveg a helyén van',()=>{
    cy.get('.menu > li:nth-child(1) > a:nth-child(1)').should('have.text','Kezdőbetű');
  })

  it('Összetevő szöveg a helyén van',()=>{
    cy.get('.menu > li:nth-child(2) > a:nth-child(1)').should('have.text','Összetevő');
  })

  it('Név szöveg a helyén van',()=>{
    cy.get('.menu > li:nth-child(3) > a:nth-child(1)').should('have.text','Név');
  })

  it('Hero kép látható',()=>{
    cy.get('.hero').find('img').should('be.visible');
  })

  it('Hero kép látható 2',()=>{
    cy.get('.max-w-sm').should('be.visible')
  })

})