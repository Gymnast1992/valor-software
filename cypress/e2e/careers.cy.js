import Careers from "../fixtures/pom/careers.page";

describe("Careers", () => {
  beforeEach(() => {
    cy.visit("/careers");
  });

  it("TC06, Should navigate to the Automation QA Engineer position and see the button Apply", () => {
    Careers.clickCheckTheOpeningsBtn();
    cy.visit("https://valorsoftware.recruitee.com/");
    cy.origin("https://valorsoftware.recruitee.com", () => {
      cy.get('[class="sc-uzptka-1 brursv"]').should("have.length", 7);
      cy.contains("Automation QA Engineer").click();
      cy.contains("Apply").should("be.visible");
    });
  });
});
