import Credential from "../fixtures/data/credentials.json";
import GetInTouch from "../fixtures/pom/get-in-touch.page";

describe("Get in touch", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC07, Should be able to get in touch with the company", () => {
    GetInTouch.clickOnTheButtonGetInTouch();
    GetInTouch.typeTheName(Credential.name);
    GetInTouch.typeTheEmail(Credential.email);
    GetInTouch.typeTheMessgae(Credential.message);
    GetInTouch.putTheCheckBoxMark();
    GetInTouch.isVisibleButtonSubmit(); 
  });
});