/// <reference types="cypress" />


describe("Testing contactUs Page",()=> {
    beforeEach(function(){
      cy.visit('https://phasecurve.com')
  
    })
  
    it("Should be able to contact the company",() =>{
        cy.contains('Contact Us').click()
        cy.scrollTo(0,800)
        cy.wait(200)
        cy.get('[name="FullName"]').type(Cypress.env('user_name'), {log: false})
        cy.get('[name="EmailAddress"]').type(Cypress.env('user_email'), {log : false})
        cy.get('[name="Company"]').type(Cypress.env('user_company'), {log: false})
        cy.get('[name="Country"]').select('Nigeria')
        .should('have.value', 'Nigeria')
        .should('be.visible')
        .should('be.enabled')
        .should('not.be.NaN')
        .should('be.focused')
        cy.wait(700)
        cy.get('[name="HowWeCanHelp"]').type('I will like to have a meeting your your management')
        .should('be.enabled')
        cy.wait(500)
        cy.contains('Get In touch').click()

        let message = 'Message sent Successfully'
        expect(message).to.be.equal('Message sent Successfully')

        //How do I entrol for a training instruction guide
        
        // Testing the social media icons
        cy.get('[href="https://www.facebook.com/Phasecurve-101743435951109"]').click()
        cy.get('[href="https://twitter.com/phasecurve"]').click()
        cy.get('[href="https://www.instagram.com/phasecurve/"]').click()
        cy.get('[href="https://www.linkedin.com/company/phasecurve/"]').click()

    });
});