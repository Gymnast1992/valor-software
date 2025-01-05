class HomePage {
    get subtitle() {return cy.get(".subtitle")};
    get imageContainer() {return cy.get('[class="_image-container_6splr_30"]')};

    verifyTheText(text){
        this.subtitle.should("have.text", text);
    }

    verifyTheName(name) {
        this.imageContainer.should("contain.text", name);
    }
}

export default new HomePage()