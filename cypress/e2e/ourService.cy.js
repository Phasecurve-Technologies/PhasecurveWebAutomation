/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

describe("Testing Service Page", () => {
    beforeEach(function () {
      cy.visit("https://phasecurve.com")
    });
  
    it("Should be able to select a service package ", () => {
        cy.contains('Our Services').click()
        cy.contains('Read our propectus to').scrollIntoView()
        cy.wait(500)


        cy.contains('learn more').click()

        cy.get(':nth-child(1) > .css-z3y24d').scrollIntoView()
       
        //To download the file
        
        cy.downloadFile('https://drive.google.com/file/d/1drHH4V9GqTzMTPPWjVWk-wg2__1LpX_f','mydownloads','Development Team Training Brochure V1.pdf')
        //cy.readFile('./mydownloads/BusinessBrochure.pdf').should('exist')

        cy.wait(1000)



      // Signing Up for 16Hrs course Corporate Engineering Training
        cy.contains('Sign Up').click()
        cy.wait(500)
        cy.get('[name="firstName"]').type('John')
        cy.wait(200)
        cy.get('[name="lastName"]').type('Chimezie')
        cy.wait(200)
        cy.get('[name="emailAddress"]').type(Cypress.env('user_email'), {log : false})
        cy.wait(200)
        cy.get('[name="company"]').type('Phasecurve Limited')
        cy.get('[name="phoneNumber"]').type(Cypress.env('user_phonenumber'), {log: false})
        // Check all boxes
        cy.get('input[type="checkbox"]').check({force: true})
        .should('be.checked')
        cy.wait(300)
        // uncheck all boxes
        cy.get('input[type="checkbox"]').uncheck({force: true})
        .should('not.be.checked')
        cy.wait(300)
        //check a specific box
        cy.get(':nth-child(1) > .chakra-checkbox__label').click({force: true})
        cy.wait(300)
        cy.contains('Get In touch').click()

      cy.wait(800)
      cy.go('back')
      cy.contains('Sign Up').scrollIntoView()
      


      // Signing Up for 60Hrs course Corporate Engineering Training
      cy.get('.css-s5vt > a > .chakra-button > .chakra-stack').click()
      cy.wait(500)
      cy.get('[name="firstName"]').type('Mary')
      cy.wait(200)
      cy.get('[name="lastName"]').type('Blonde')
      cy.get('[name="emailAddress"]').type('mahzeeljohn@gmail.com')
      cy.wait(200)
      cy.get('[name="company"]').type(Cypress.env('user_company'), {log: false})
      cy.get('[name="phoneNumber"]').type(Cypress.env('user_phonenumber'), {log: false})
       
      //Check all boxes
      cy.get('input[type="checkbox"]').check({force: true})
      .should('be.checked')
      cy.wait(300)
      // uncheck all boxes
      cy.get('input[type="checkbox"]').uncheck({force: true})
      .should('not.be.checked')
      cy.wait(300)
      //check a specific box
      cy.get(':nth-child(1) > .chakra-checkbox__label').click({force: true})
      cy.get(':nth-child(2) > .chakra-checkbox__label').click({force: true})
      cy.wait(300)
      cy.contains('Get In touch').click()
       
      cy.wait(500)
      cy.go('back')

      


        // Signing Up for Bespoke course Corporate Engineering Training
        cy.get(':nth-child(3) > .css-z3y24d > a > .chakra-button').click()
        cy.wait(500)
        cy.get('[name="firstName"]').type('Mark')
        cy.wait(200)
        cy.get('[name="lastName"]').type('Gray')
        cy.get('[name="emailAddress"]').type('mahzeeljohn@gmail.com')
        cy.wait(200)
        cy.get('[name="company"]').type('Phasecurve Limited')
        cy.get('[name="phoneNumber"]').type(Cypress.env('user_phonenumber'), {log: false})
         
        //Check all boxes
        cy.get('input[type="checkbox"]').check({force: true})
        .should('be.checked')
        cy.wait(300)
        // uncheck all boxes
        cy.get('input[type="checkbox"]').uncheck({force: true})
        .should('not.be.checked')
        cy.wait(300)
        //check a specific box
        cy.get(':nth-child(1) > .chakra-checkbox__label').click({force: true})
        cy.get(':nth-child(2) > .chakra-checkbox__label').click({force: true})
        cy.get(':nth-child(4) > .chakra-checkbox__label').click({force: true})
        cy.wait(300)
        cy.contains('Get In touch').click()
         
        cy.wait(500)
        cy.go('back')

        let message = 'Form submitted successfully'
      expect(message).to.be.equal('Form submitted successfully')

    });
  });
  