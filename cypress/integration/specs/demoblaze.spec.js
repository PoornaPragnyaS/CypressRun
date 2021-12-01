import signIn from "../../page-objects/signIn";
import todoSignUp from "../../page-objects/todoSignUp";
import item from "../../page-objects/item.js";
import cart from "../../page-objects/cart.js";
import order from "../../page-objects/order.js";

describe("Demoblaze example app", () => {
  const signinacc = new signIn();
  const signUpform = new todoSignUp();
  const itemclick = new item();
  const cartpage = new cart();
  const orderdetail = new order();
  beforeEach(() => {
    cy.visit("/");
  });
  it(" Click on SigIn", () => {
    signinacc.getLinks().click();
    signUpform.getUserName().type("Poorna S ");

    signUpform.getUserPassword().type("PoornaPragnya");
    signUpform.getModalId().within(() => {
      signUpform.getButton().last().click();
    });
  });
  it("Select an item", () => {
    itemclick.getid().within(() => {
      itemclick.getimg().click();
    });
  });
  it(" Add an item to cart", () => {
    cartpage.geturl();
    cartpage.getid().within(() => {
      cartpage.button().last().click();
    });
  });

  it(" Check the item in cart", () => {
    cartpage.link().click();
  });

  it("Place order", () => {
    orderdetail.geturl();
    orderdetail.button().click();
    orderdetail.name().type("Poorna S");
    orderdetail.country().type("India");
    orderdetail.city().type("Bengaluru");
    orderdetail.card().type("0000000000");
    orderdetail.month().type("November");
    orderdetail.year().type("2021");
    orderdetail.purchase().click();
    orderdetail.confirm().last().click();
    cy.visit("/");
  });
});
