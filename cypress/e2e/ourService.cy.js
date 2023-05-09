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
        cy.readFile('./mydownloads/BusinessBrochure.pdf').should('exist')
     
    });
  });
  