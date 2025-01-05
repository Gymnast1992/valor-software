import HomePage from "../fixtures/pom/homepage";
const text =
  "We are not coders, we're true engineers and specialized experts with a deep understanding of languages and frameworks necessary to build the next-gen apps and platforms.";
const supportEmail = "support@valor-software.com";
const name = "Dima Shekhovtsov, GDE";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC01, Should verify the text and the name on the homepage", () => {
    HomePage.verifyTheText(text);
    HomePage.verifyTheName(name);
  });

  it("TC02, Should verify the length of side-bar pages", () => {
    HomePage.verifyPagesLength(8);
  });

  it("TC03, Should scroll down to the bottom and verify the support email", () => {
    HomePage.scrollToTheBottom;
    HomePage.supportEmailIsVisible(supportEmail);
  });

  it("TC04, Should navigate to the Blog section and verify the first listing", () => {
    HomePage.clickOnTheHumburgerMenu();
    HomePage.clickOnTheBtnBlog();
    HomePage.isFirstBlogListingVisible();
  });

  it("TC05, Should verify the length of the listings in the header", () => {
    HomePage.verifyTheHeaderLiLength(7);
  });
});
