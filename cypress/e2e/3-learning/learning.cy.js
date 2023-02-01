///reference types="cypress" />

describe('Learning Test', function() {
    it('Testing Website', () => {
        cy.visit('https://books.toscrape.com/');
        cy.contains('Travel').click();
        cy.get('h1').should('have.text', 'Travel');
    
    });

})