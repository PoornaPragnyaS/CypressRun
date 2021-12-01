/// <reference types='cypress-tags' />

const { get } = require("lodash");

describe(["wip"], "Get API user test", () => {
  it(["smoke"], "Check Status ", () => {
    cy.request({
      method: "GET",
      url: "http://petstore.swagger.io/v2/pet/5",
    }).then((Response) => {
      let data = Response.body;
      expect(Response.status).to.eq(200);
      expect(data).to.have.all.keys(
        "id",
        "category",
        "name",
        "photoUrls",
        "tags",
        "status"
      );
    });
  });
});
