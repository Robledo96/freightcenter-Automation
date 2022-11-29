
describe('Home Page test and Redirects', () => {
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

    it('Checking Logo', () => {
        cy.get('.navbar-brand', { timeout: 60000 })
            .should('have.attr', 'href', '/')
            .and('be.visible')
    })

    it('Checking Contact ', () => {
        cy.get('.ml-2 > a')
            .should('have.attr', 'href', 'tel:8007167608', { timeout: 60000 })
            .and('be.visible')
    })

    it('Checking SUPPORT redirects ', () => {
        cy.get('.nav > :nth-child(1) > .nav-link', { timeout: 60000 })
            .should('have.attr', 'href', '/help')
            .and('contain', 'Support')
            .and('be.visible')
            .click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/help')
        cy.get('section.py-5 > :nth-child(1) > :nth-child(1) > .text-center > .text-muted', { timeout: 6000 })
            .should('contain', ' Support Center')
            .and('be.visible')

        cy.get('.navbar-brand').click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/')
    })

    it('Checking TRACK redirects ', () => {
        cy.get('#nav-customer-menu > .nav > :nth-child(2) > .nav-link', { timeout: 60000 })
            .should('have.attr', 'href', '/track')
            .and('contain', 'Track')
            .and('be.visible')
            .click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/track')

        cy.get('h1', { timeout: 6000 })
            .should('contain', 'Track Your Shipment')
            .and('be.visible')

        cy.get('#shipment', { timeout: 60000 })
            .should('have.attr', 'placeholder', 'Enter FreightCenter Shipment ID, PRO number or Pickup number')
            .get('input').should('be.empty')

        cy.get('.navbar-brand').click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/')
    })

    it('Checking REGISTER redirects ', () => {
        cy.get('#nav-customer-menu > .nav > :nth-child(3) > .nav-link', { timeout: 60000 })
            .should('have.attr', 'href', 'https://my.freightcenter.com/home/signup')
            .and('contain', 'Register')
            .and('be.visible')
            .click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/home/signup')
        cy.get('.headerText', { timeout: 6000 })
            .should('contain', 'SIGN UP')
            .and('be.visible')

        cy.get('h1 > img').click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/')
    })

    it('Checking LOG IN redirects ', () => {
        cy.get('.nav > :nth-child(4) > .nav-link', { timeout: 60000 })
            .should('have.attr', 'href', 'https://my.freightcenter.com/home/login')
            .and('contain', 'Log In')
            .and('be.visible')
            .click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/home/login')
        cy.get('.wraper > div > ul > .active', { timeout: 6000 })
            .should('contain', 'Login')
            .and('be.visible')

        cy.get('h1 > img').click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/')
    })

    it('Checking SHIPPING contents ', () => {
        cy.get(':nth-child(1) > .dropdown-toggle', { timeout: 60000 })
            .should('contain', 'Shipping')
            .and('be.visible')
            .click()
        cy.get('.nav-item.show > .dropdown-menu > .container > .row > :nth-child(1) > .title', { timeout: 60000 })
            .should('have.attr', 'href', '/freight-services-quote')
            .and('contain', 'Services')
            .and('be.visible')
        cy.get('.nav-item.show > .dropdown-menu > .container > .row > :nth-child(2) > .title', { timeout: 60000 })
            .should('have.attr', 'href', '/freight-services-quote')
            .and('contain', 'Solutions')
            .and('be.visible')
        cy.get('.nav-item.show > .dropdown-menu > .container > .row > :nth-child(3) > .title', { timeout: 60000 })
            .should('have.attr', 'href', '/nationwide-shipping')
            .and('contain', 'Shipping ', 'by Location')
            .and('be.visible')
    })

    it('Checking RESOURCES contents ', () => {
        cy.get(':nth-child(2) > .dropdown-toggle', { timeout: 60000 })
            .should('contain', 'Resources')
            .and('be.visible')
            .click()
        cy.get('.nav-item.show > .dropdown-menu > .container > .row > :nth-child(1) > .title', { timeout: 60000 })
            .should('have.attr', 'href', '/help')
            .and('contain', 'Customer Support')
            .and('be.visible')
        cy.get('.nav-item.show > .dropdown-menu > .container > .row > :nth-child(2) > .title', { timeout: 60000 })
            .should('have.attr', 'href', '/resources')
            .and('contain', 'Tools')
            .and('be.visible')
        cy.get('.nav-item.show > .dropdown-menu > .container > .row > :nth-child(3) > .title', { timeout: 60000 })
            .should('have.attr', 'href', '/help/glossary')
            .and('contain', 'Knowledge Base')
            .and('be.visible')
    })

    it('Checking ABOUT US contents ', () => {
        cy.get(':nth-child(3) > .dropdown-toggle', { timeout: 60000 })
            .should('contain', 'About Us')
            .and('be.visible')
            .click()
        cy.get('.nav-item.show > .dropdown-menu > .container > .row > .col-12 > .title', { timeout: 60000 })
            .should('have.attr', 'href', '/about')
            .and('contain', 'About Us')
            .and('be.visible')
    })

    it('Checking GET QUOTE redirects ', () => {
        cy.get('#nav-cta-quote', { timeout: 60000 })
            .should('have.attr', 'href', '/quote')
            .and('contain', 'Get Quote')
            .and('be.visible')
            .click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/quote')
        cy.get('.col-md-12 > .text-uppercase')
            .should('contain', 'Shipping Quote ')
            .and('be.visible')

        cy.get('.navbar-brand').click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/')
        cy.location('pathname', { timeout: 60000 })
    })

    it('Checking Freight & Parcel redirects ', () => {
        cy.get('#desktop-nav > :nth-child(1) > .btn', { timeout: 60000 })
            .should('have.attr', 'href', '/crate-pallet-parcel-shipping')
            .and('contain', 'Freight', ' & Parcel')
            .and('be.visible')
            .click()

        cy.location('pathname', { timeout: 60000 })
            .should('include', '/crate-pallet-parcel-shipping')

        cy.get('h1', { timeout: 60000 })
            .should('contain', 'Crate, Pallet, or Parcel?')
            .and('be.visible')

        cy.get('.navbar-brand').click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/')
    })

    it('Checking Automotive redirects ', () => {
        cy.get(':nth-child(2) > .btn', { timeout: 60000 })
            .should('have.attr', 'href', '/shipping-auto-parts')
            .and('contain', 'Automotive')
            .and('be.visible')
            .click()

        cy.location('pathname', { timeout: 60000 })
            .should('include', '/shipping-auto-parts')

        cy.get('h1', { timeout: 60000 })
            .should('contain', 'Shipping Auto Parts')
            .and('be.visible')

        cy.get('.navbar-brand').click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/')
    })

    it('Checking Machinery redirects ', () => {
        cy.get(':nth-child(3) > .btn', { timeout: 60000 })
            .should('have.attr', 'href', '/equipment-transport-construction-materials')
            .and('contain', 'Machinery')
            .and('be.visible')
            .click()

        cy.location('pathname', { timeout: 60000 })
            .should('include', '/equipment-transport-construction-materials')

        cy.get('h1', { timeout: 60000 })
            .should('contain', 'Machinery & Equipment')
            .and('be.visible')

        cy.get('.navbar-brand').click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/')
    })

    it('Checking Furniture redirects ', () => {
        cy.get('#desktop-nav > :nth-child(4) > .btn', { timeout: 60000 })
            .should('have.attr', 'href', '/shipping-furniture')
            .and('contain', 'Furniture')
            .and('be.visible')
            .click()

        cy.location('pathname', { timeout: 60000 })
            .should('include', '/shipping-furniture')

        cy.get('h1', { timeout: 60000 })
            .should('contain', 'Furniture Shipping Quote')
            .and('be.visible')

        cy.get('.navbar-brand').click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/')
    })

    it('Checking Medical redirects ', () => {
        cy.get(':nth-child(5) > .btn', { timeout: 60000 })
            .should('have.attr', 'href', '/food-beverage-medical-shipping-logistics')
            .and('contain', 'Medical')
            .and('be.visible')
            .click()

        cy.location('pathname', { timeout: 60000 })
            .should('include', '/food-beverage-medical-shipping-logistics')

        cy.get('h1', { timeout: 60000 })
            .should('contain', 'food beverage medical shipping logistics')
            .and('be.visible')

        cy.get('.navbar-brand').click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/')
    })

    it('Checking LTL Freight Shipping redirects ', () => {
        cy.get(':nth-child(1) > .d-block', { timeout: 60000 })
            .should('have.attr', 'href', '/freight-services-quote/ltl-freight')
            .and('contain', 'LTL Freight Shipping')
            .and('be.visible')
            .click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/freight-services-quote/ltl-freight')
        cy.get('h1', { timeout: 60000 })
            .should('contain', 'LTL Freight')
            .and('be.visible')

        cy.get('.navbar-brand').click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/')
    })

    it('Checking Truckload Freight Shipping redirects ', () => {
        cy.get(':nth-child(2) > .d-block', { timeout: 60000 })
            .should('have.attr', 'href', '/truckload-shipping')
            .and('contain', 'Truckload Freight Shipping ')
            .and('be.visible')
            .click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/truckload-shipping')
        cy.get('h1', { timeout: 60000 })
            .should('contain', 'Truckload Shipping')
            .and('be.visible')

        cy.get('.navbar-brand').click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/')
    })

    it('Checking Specialized Freight redirects ', () => {
        cy.get(':nth-child(3) > .d-block', { timeout: 60000 })
            .should('have.attr', 'href', '/freight-services-quote/specialized')
            .and('contain', 'Specialized Freight')
            .and('be.visible')
            .click()
            cy.location('pathname', { timeout: 60000 })
            .should('include', '/freight-services-quote/specialized')
        cy.get('h1', { timeout: 60000 })
            .should('contain', 'Specialized Freight')
            .and('be.visible')

        cy.get('.navbar-brand').click()
        cy.location('pathname', { timeout: 60000 })
            .should('include', '/')
    })
})
