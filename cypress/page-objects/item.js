class item {
  getid() {
    return cy.get("#tbodyid");
  }
  getimg() {
    return cy.get('[src="imgs/iphone_6.jpg"]');
  }
}
export default item;
