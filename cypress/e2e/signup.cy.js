describe("Verify Sign Up Feature", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Verifies Signing Up Without Username And Password", () => {
    cy.get("#signin2").click();
    cy.get("#signInModal").should("have.attr", "style", "display: block;");
    cy.get("#signInModal .modal-footer > .btn-primary").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contain("Please fill out Username and Password.");
    });
  });
  it("Verifies Signing Up Without Password", () => {
    cy.get("#signin2").click();
    cy.get("#signInModal").should("have.attr", "style", "display: block;");
    cy.get("#sign-username").type("username");
    cy.get("#signInModal .modal-footer > .btn-primary").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contain("Please fill out Username and Password.");
    });
  });
  it("Verifies Signing Up Without Username", () => {
    cy.get("#signin2").click();
    cy.get("#signInModal").should("have.attr", "style", "display: block;");
    cy.get("#sign-username").clear();
    cy.get("#sign-password").type("password");
    cy.get("#signInModal .modal-footer > .btn-primary").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contain("Please fill out Username and Password.");
    });
  });
  it("Verifies Signing Up With Existing Account", () => {
    cy.get("#signin2").click();
    cy.get("#signInModal").should("have.attr", "style", "display: block;");
    cy.get("#sign-username").clear().type("username");
    cy.get("#sign-password").clear().type("password");
    cy.get("#signInModal .modal-footer > .btn-primary").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contain("This user already exist.");
    });
  });
});
