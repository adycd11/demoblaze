describe("Verify Login Feature", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Verifies Logging In Without Username And Password", () => {
    cy.get("#login2").click();
    cy.get("#logInModal").should("have.attr", "style", "display: block;");
    cy.get("#logInModal .modal-footer > .btn-primary").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contain("Please fill out Username and Password.");
    });
  });
  it("Verifies Logging In Without Password", () => {
    cy.get("#login2").click();
    cy.get("#logInModal").should("have.attr", "style", "display: block;");
    cy.get("#loginusername").type("username");
    cy.get("#logInModal .modal-footer > .btn-primary").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contain("Please fill out Username and Password.");
    });
  });
  it("Verifies Logging In Without Username", () => {
    cy.get("#login2").click();
    cy.get("#logInModal").should("have.attr", "style", "display: block;");
    cy.get("#loginusername").clear();
    cy.get("#loginpassword").type("password");
    cy.get("#logInModal .modal-footer > .btn-primary").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contain("Please fill out Username and Password.");
    });
  });
  it("Verifies Login With Username And Wrong Password", () => {
    cy.get("#login2").click();
    cy.get("#logInModal").should("have.attr", "style", "display: block;");
    cy.get("#loginusername").clear().type("ohohsalnlsn");
    cy.get("#loginpassword").clear().type("passwordxytr");
    cy.get("#logInModal .modal-footer > .btn-primary").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contain("Wrong password.");
    });
  });
  it("Verifies Login With Username And Correct Password", () => {
    cy.get("#login2").click();
    cy.get("#logInModal").should("have.attr", "style", "display: block;");
    cy.get("#loginusername").clear().type("username");
    cy.get("#loginpassword").clear().type("password");
    cy.get("#logInModal .modal-footer > .btn-primary").click();
    cy.get("#nameofuser").should("contain", "username");
  });
});
