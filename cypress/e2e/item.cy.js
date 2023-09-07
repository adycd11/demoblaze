describe("Verify Item", () => {
  it("Verify Item From Card To Cart", () => {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    cy.visit("/");
    cy.get("#tbodyid > div")
      .eq(getRandomInt(0, 9))
      .find("h4.card-title")
      .then((text) => {
        let productName = text.text();
        cy.get(text).click();
        cy.get("#imgp img").should("be.visible");
        cy.get("h2.name").then((text) => {
          let title = text.text();
          expect(title).to.equal(productName);
          cy.get("a.btn-success").should("contain", "Add to cart").click();
          cy.on("window:alert", (text) => {
            expect(text).to.contain("Product added");
          });
          cy.get("#navbarExample li")
            .eq(3)
            .find("a")
            .should("contain", "Cart")
            .click();
          cy.get("tr.success > td").eq(0).find("img").should("be.visible");
          cy.get("tr.success > td")
            .eq(1)
            .then((text) => {
              let cartProduct = text.text();
              expect(cartProduct).to.equal(title);
            });
          cy.go("back");
        });
        cy.get("#tbodyid > h3.price-container").then((text) => {
          let fullText = text.text();
          let number = /\d+/g;
          let price = fullText.match(number);
          cy.visit("/cart.html");
          cy.get("tr.success")
            .last()
            .find("td")
            .eq(2)
            .then((text) => {
              let productPrice = text.text();
              expect(productPrice).to.equal(price[0]);
              cy.get("button.btn-success")
                .should("contain", "Place Order")
                .click();
              cy.get("#totalm").then((text) => {
                let modalPriceInfo = text.text();
                let modalPrice = modalPriceInfo.match(number);
                expect(modalPrice[0]).to.equal(productPrice);
              });
            });
        });
      });
  });
});
