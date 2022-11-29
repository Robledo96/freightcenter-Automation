describe('e2e Calculate Freight Rates', () => {
    beforeEach(function () {
        const suite = cy.state('test').parent
        if (suite.tests.some(test => test.state === 'failed')) {
            this.skip()
        }
    })

    //Page 1
    it('Visit', () => {
        cy.visit('/', { timeout: 60000 })
    })

    it('Calculate Freight Rates - click', () => {
        cy.get(':nth-child(3) > .btn', { timeout: 60000 })
            .should('have.attr', 'href', '/quote')
            .and('be.visible')
            .click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/quote')
        cy.get('h1', { timeout: 60000 })
            .should('contain', 'Shipping Quote', 'Form')
            .and('be.visible')
    })

    it('Shipping Quote Form - form', () => {
        cy.get('#orZip', { timeout: 60000 })
            .should('have.attr', 'placeholder', 'Pickup Postal Code')
            .type('33193')
        cy.get('.ui-menu-item > div', { timeout: 60000 })
            .contains('Miami, FL 33193, USA')
            .click()

        cy.get('select').eq(0).select('Business (with a dock or forklift)')
        cy.get('#deszip')
            .type('Miami, FL 33101, USA')

        cy.get('#desFacility')
            .type('Business(without a dock or forklift)')

        cy.get('#ulenght')
            .should('have.attr', 'placeholder', 'Length')
            .type('50')
        cy.get('#uwidth')
            .should('have.attr', 'placeholder', 'Width')
            .type('60')
        cy.get('#uheight')
            .should('have.attr', 'placeholder', 'Height')
            .type('80')
        cy.get('select').eq(2).select('ft')

        cy.get('#unitweight')
            .should('have.attr', 'placeholder', 'Weight')
            .type('120')
        cy.get('select').eq(3).select('kg')
    })
})
