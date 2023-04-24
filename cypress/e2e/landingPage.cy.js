/// <reference types="cypress" />


describe("Testing LandingPage",()=> {
  beforeEach(function(){
    cy.visit('https://phasecurve.com')

  })

  it("Should be able to signup for a newsletter",() =>{ 
        cy.scrollTo(0,300)
        cy.wait(2000)
        cy.contains('Contact Us').click()
        cy.scrollTo(0,600)
        cy.wait(2000)
        cy.go('back')
        cy.scrollTo(0, 2000)
        cy.wait(2000)
        cy.contains('Contact Us').click()
        cy.wait(1500)
        cy.scrollTo(0,600)
        cy.wait(1000)
        cy.go('back')
        cy.wait(500)
        cy.scrollTo(0,3500)
        cy.wait(2000)
        cy.get('.chakra-input').type('mahzeeljohn@gmail.com')
        cy.wait(400)
        cy.contains('Apply Now').should('contain', 'Apply Now')
          .should('have.class', 'chakra-button css-1l1lhbs')
          .should('be.visible')
          .should('be.visible')
          .click()

          
        let message = 'Subscribed successfully'
        expect(message).to.be.equal('Subscribed successfully')

        //assert
        assert.equal(4, 4, 'Not Equal')
        assert.strictEqual(4, '4', 'Not strictly Equal')
        
      
        

  })
})
