/// <reference types="cypress" />

describe("Testing aboutUs Page", () => {
    beforeEach(function () {
      cy.visit("https://phasecurve.com");
    });
  
    it("Should be able to navigate to page", () => {
      cy.contains("About Us").click();
      cy.wait(1000)
      cy.scrollTo(0,4500)
      cy.wait(500)
      cy.contains("Meet all experts").click()
      cy.contains("Ellah Fortune").scrollIntoView()
  
    });
  });
  