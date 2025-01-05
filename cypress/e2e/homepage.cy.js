import HomePage from "../fixtures/pom/homepage";
const text = "We are not coders, we're true engineers and specialized experts with a deep understanding of languages and frameworks necessary to build the next-gen apps and platforms.";
const supportEmail = "support@valor-software.com";
const name = "Dima Shekhovtsov, GDE";


describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("Verifying the text and the name on the homepage", () => {
    HomePage.verifyTheText(text);
    HomePage.verifyTheName(name);
  });

  it("Should verify the lenght of the pages in the side-bar", () => {
    cy.get("._buttons_tof5b_16 > :nth-child(3)").click();
    cy.get('[class="_long-link_19pvy_30"]').should("have.length", 8);
  });

  it("Should scroll down to the bottom and verify the text", () => {
    cy.get("._buttons_tof5b_16 > :nth-child(3)").click();
    cy.scrollTo('bottom');
    cy.contains(supportEmail).should("be.visible");
  });

  it("Should navigate to the Blog section and verify the first listing", () => {
    cy.get("._buttons_tof5b_16 > :nth-child(3)").click();
    cy.wait(2000);
    cy.get(".hamburger-react").click({force:true});
    cy.get("header ul li").should("have.length", 7);
    cy.get("header ul li").eq(6).click();
    cy.get("._list-block_1eio8_14 > :nth-child(1)").should("be.visible");
  });

});
