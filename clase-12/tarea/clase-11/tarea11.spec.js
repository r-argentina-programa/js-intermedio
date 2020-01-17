/// <reference types="Cypress" />

describe('Test de Tarea 11', () => {
  before(() => {
      cy.visit('http://localhost:8081/index-mio.html');
  });


  it('Testea la funcionalidad de la tarea 6', () => {
    cy.get('#cantidad-integrantes').type('2');
    cy.get('#siguiente-paso').click();
    cy.get('.integrante input').eq(0).type('25');
    cy.get('.integrante input').eq(1).type('20');
    cy.get('#calcular').click();

    cy.get('#promedio-edad').should('have.text', '22.50');
    cy.get('#menor-edad').should('have.text', '20');
    cy.get('#mayor-edad').should('have.text', '25');
  });

});
