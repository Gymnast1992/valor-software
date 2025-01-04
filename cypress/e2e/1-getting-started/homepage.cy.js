const text = "We are not coders, we're true engineers and specialized experts with a deep understanding of languages and frameworks necessary to build the next-gen apps and platforms.";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verifying the text and the name on the homepage", () => {
    cy.get("._buttons_tof5b_16 > :nth-child(3)").click();
    cy.wait(2000);
    cy.get(".subtitle").should("have.text", text);
    cy.get('[class="_image-container_6splr_30"]').should("contain.text", "Dima Shekhovtsov, GDE")
  });

  it("Should verify the lenght of the pages in the side-bar", () => {
    cy.get("._buttons_tof5b_16 > :nth-child(3)").click();
    cy.get(`[class="_long-link_19pvy_30"]`).should("have.length", 8);
  });

  it("Should scroll down to the bottom and verify the text", () => {
    
  });

});
