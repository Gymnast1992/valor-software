class HomePage {
    get subtitle() {return cy.get(".subtitle")};
    get imageContainer() {return cy.get('[class="_image-container_6splr_30"]')};
    get sideBarPages() {return cy.get('[class="_long-link_19pvy_30"]')};
    get scrollToTheBottom() {return cy.scrollTo('bottom')};
    get supportEmail() {return cy.contains(email)};
    get humburgerMenu() {return cy.get(".hamburger-react")};
    get btnBlog() {return cy.contains("Blog")};
    get firstBlogListing() {return cy.get("._list-block_1eio8_14 > :nth-child(1)")};
    get headerSection() {return cy.get("header ul li")};

    verifyTheText(text){
        this.subtitle.should("have.text", text);
    }

    verifyTheName(name) {
        this.imageContainer.should("contain.text", name);
    }

    verifyPagesLength(length){
        this.sideBarPages.should("have.length", length);
    }

    supportEmailIsVisible(email) {
        cy.contains(email).should("be.visible");
    }

    clickOnTheHumburgerMenu() {
        this.humburgerMenu.click({force:true});
    }

    clickOnTheBtnBlog() {
        this.btnBlog.click();
    }

    isFirstBlogListingVisible() {
        this.firstBlogListing.should("be.visible");
    }

    verifyTheHeaderLiLength(length) {
        this.headerSection.should("have.length", length)
    }

}

export default new HomePage()