describe("Verify Purchase", () => {
  beforeEach(() => {
    cy.visit("/cart.html");
  });
  it("Verifies Order Modal Without Name And Card", () => {
    cy.get("button.btn-success").click();
    cy.get("#orderModal").should("have.attr", "style", "display: block;");
    cy.get("#orderModal .modal-footer > .btn-primary").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contain("Please fill out Name and Creditcard.");
    });
  });
  it("Verifies Order Modal Without Card", () => {
    cy.get("button.btn-success").click();
    cy.get("#name").type("Some username");
    cy.get("#orderModal .modal-footer > .btn-primary").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contain("Please fill out Name and Creditcard.");
    });
  });
  it("Verifies Order Modal Without Name", () => {
    cy.get("button.btn-success").click();
    cy.get("#name").clear();
    cy.get("#card").type("4242 4242 4242 4242");
    cy.get("#orderModal .modal-footer > .btn-primary").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contain("Please fill out Name and Creditcard.");
    });
  });
  it("Verifies Order Modal With Name And Card", () => {
    cy.get("button.btn-success").click();
    cy.get("#name").clear().type("Some username");
    cy.get("#card").clear().type("4242 4242 4242 4242");
    cy.get("#orderModal .modal-footer > .btn-primary").click();
    cy.get("div.showSweetAlert.visible button.confirm").click();
  });
});
