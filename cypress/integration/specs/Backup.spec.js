describe("Demoblaze example app", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it(" Click on Sigin", () => {
    cy.get("a.nav-link#signin2").click();
    cy.get("input.form-control#sign-username").type("Poorna S ");

    cy.get("input.form-control#sign-password").type("PoornaPragnya");
    cy.get("#signInModal").within(() => {
      cy.get("button.btn-primary").last().click();
    });
  });
  it("Select an item", () => {
    cy.get("#tbodyid").within(() => {
      cy.get('[src="imgs/iphone_6.jpg"]').click();
    });
  });
  it(" Add an item to cart", () => {
    cy.visit("/prod.html?idp_=5");
    cy.get("#tbodyid").within(() => {
      cy.get("a.btn-lg").last().click();
    });
  });

  it(" Check the item in cart", () => {
    cy.get("a#cartur").click();
  });

  it("Place order", () => {
    cy.visit("/cart.html");
    cy.get("button.btn-success").click();
    cy.get("input.form-control#name").type("Poorna S");
    cy.get("input.form-control#country").type("India");
    cy.get("input.form-control#city").type("Bengaluru");
    cy.get("input.form-control#card").type("0000000000");
    cy.get("input.form-control#month").type("November");
    cy.get("input.form-control#year").type("2021");
    cy.xpath('//*[@id="orderModal"]/div/div/div[3]/button[2]').last().click();
    cy.xpath("/html/body/div[10]/div[7]/div/button").last().click();
    cy.visit("/");
  });
});
