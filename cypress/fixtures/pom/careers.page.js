class Careers {
    get btnCheckTheOpenings() {return cy.contains("Check the openings")};
    get sectionWithOpenPositions() {return cy.get('[class="sc-uzptka-1 brursv"]')};
    get positionAutomationQAEngineer() {return cy.contains("Automation QA Engineer")};
    get btnApply() {return cy.contains("Apply")};
    
    clickCheckTheOpeningsBtn(){
        this.btnCheckTheOpenings.click({force:true});
    }

    verify7NewPositions(){
        this.sectionWithOpenPositions.should("have.length", 7);
    }

    clickAutomationQAEngineer(){
        this.positionAutomationQAEngineer.click();
    }

    isVisibleBtnApply(){
        this.btnApply.should("be.visible");
    }
}


export default new Careers();