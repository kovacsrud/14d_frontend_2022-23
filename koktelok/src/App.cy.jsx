import React from 'react'
import App from './App'

describe('App komponens betöltése', () => {
  it('App komponens betöltése', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })
})