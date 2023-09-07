describe("Verify Logout Feature", () => {
  it("Verifies Logout", () => {
    cy.visit("/");
    cy.get("#login2").click();
    cy.get("#loginusername").clear().type("username");
    cy.get("#loginpassword").clear().type("password");
    cy.get("#logInModal .modal-footer > .btn-primary").click();
    cy.get("#nameofuser").should("contain", "username");
    cy.get("#logout2").click();
    cy.get("#nameofuser").should("not.be.visible");
  });
});
