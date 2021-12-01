class order {
  geturl() {
    return cy.visit("https://www.demoblaze.com/cart.html");
  }
  button() {
    return cy.get("button.btn-success");
  }
  name() {
    return cy.get("input.form-control#name");
  }
  country() {
    return cy.get("input.form-control#country");
  }
  city() {
    return cy.get("input.form-control#city");
  }
  card() {
    return cy.get("input.form-control#card");
  }
  month() {
    return cy.get("input.form-control#month");
  }
  year() {
    return cy.get("input.form-control#year");
  }
  purchase() {
    return cy.xpath('//*[@id="orderModal"]/div/div/div[3]/button[2]');
  }
  confirm() {
    return cy.xpath("/html/body/div[10]/div[7]/div/button");
  }
}
export default order;
