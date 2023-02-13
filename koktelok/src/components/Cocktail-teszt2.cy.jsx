import React from 'react'
import Cocktail from './Cocktail'

let cocktail={
  strDrinkThumb:"thumb",
  strDrink:"ital",
  strCategory:"kategória",
  strAlcoholic:"alkoholos-e"
}

describe('<Cocktail />', () => {
  it('renders', () => {
    
    cy.mount(<Cocktail cocktail={cocktail} />)
    cy.get('h2').should('have.text','ital')
    cy.get('p').should('contains.text','kategória')
    cy.get('p').should('contains.text','alkoholos-e')
    cy.get('img').should('be.visible')
    cy.get('img').should('have.attr','src')
  })
})