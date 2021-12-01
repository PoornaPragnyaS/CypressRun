class cart {
  geturl() {
    return cy.visit("https://www.demoblaze.com/prod.html?idp_=5");
  }
  getid() {
    return cy.get("#tbodyid");
  }
  button() {
    return cy.get("a.btn-lg");
  }
  link() {
    return cy.get("a#cartur");
  }
}
export default cart;
