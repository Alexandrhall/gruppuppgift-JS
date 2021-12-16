describe("Webshop list test", () => {
    it("it should add item in cart", () => {
        cy.visit("http://localhost:1234");

        cy.get("#continueButton").click();

        cy.get(".buy-button:first").click();

        cy.get("#prodCart").click();

        cy.get(".cartItem").should("have.length", 1);
    });
    it("it should remove item in cart", () => {
        cy.visit("http://localhost:1234");

        cy.get("#continueButton").click();

        cy.get(".buy-button:first").click();

        cy.get("#prodCart").click();

        cy.get(".cartItem").should("have.length", 1);

        cy.get(".fa-trash-o").click();

        cy.get(".cartItem").should("have.length", 0);
    });
});