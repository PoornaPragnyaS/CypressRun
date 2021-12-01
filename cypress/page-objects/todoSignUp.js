class todoSignUp {
  getUserName() {
    return cy.get("input.form-control#sign-username");
  }
  getUserPassword() {
    return cy.get("input.form-control#sign-password");
  }
  getModalId() {
    return cy.get("#signInModal");
  }
  getButton() {
    return cy.get("button.btn-primary");
  }
}
export default todoSignUp;
