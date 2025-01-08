class GetInTouch {
    get btnGetInTouch() {return cy.get('[class="_right-block_qjzgl_24"]')};
    get inputName() {return cy.get('[name="name"]')};
    get inputEmail() {return cy.get('[name="email"]')};
    get inputMessage() {return cy.get('[name="message"]')};
    get checkBox() {return cy.get('[type="checkbox"]')};
    get btnSubmit() {return cy.get('button[type="submit"]')};

    clickOnTheButtonGetInTouch(){
        this.btnGetInTouch.click();
    }

    typeTheName(name){
        this.inputName.type(name);
    }

    typeTheEmail(email){
        this.inputEmail.type(email);
    }

    typeTheMessgae(message){
        this.inputMessage.type(message);
    }

    putTheCheckBoxMark(){
        this.checkBox.check();
    }

    isVisibleButtonSubmit() {
        this.btnSubmit.should("be.visible");
    }
}

export default new GetInTouch();