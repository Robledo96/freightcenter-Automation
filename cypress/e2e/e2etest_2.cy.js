describe('e2e Calculate Freight Rates #2', () => {
    beforeEach(function () {
        const suite = cy.state('test').parent
        if (suite.tests.some(test => test.state === 'failed')) {
            this.skip()
        }
    })

    //Page 1
    it('Visit', () => {
        cy.visit('/', { timeout: 6000 })
    })

    it('Calculate Freight Rates - redirect', () => {
        cy.get(':nth-child(3) > .btn', { timeout: 6000 })
            .should('have.attr', 'href', '/quote')
            .and('be.visible')
            .click()
        cy.location('pathname', { timeout: 6000 })
            .should('include', '/quote')
        cy.get('h1', { timeout: 6000 })
            .should('contain', 'Shipping Quote', 'Form')
            .and('be.visible')
    })

    it('Shipping Quote Form - form', () => {
        cy.get('.pl-lg-4 > input').check()
            .should('be.checked')
        cy.get('.pl-lg-4 > span')
            .should('contain', 'Full Truckload')

        cy.get('select').select('Drayage')

        cy.get('#weight').type('50')

        cy.get('#value').type('5')

        cy.get('#pickups').type('3')

        cy.get('#drops').type('2')

        cy.get('#description')
            .type('be careful when handling this equipment')

        cy.get('#zip_origin', { timeout: 6000 })
            .type('33193')
        cy.get('#ui-id-3', { timeout: 6000 })
            .should('contain', 'Miami, FL 33193, USA')
            .click()

        cy.get('#date_pickup')

        cy.get('#zip_destination', { timeout: 6000 })
            .type('33180')
        cy.get('#ui-id-103', { timeout: 6000 })
            .should('contain', 'Aventura, FL 33180, USA')
            .click()

        cy.get('#Oversized').check()

        cy.get('.col-md-12 > .btn')
            .click()
    })
})
