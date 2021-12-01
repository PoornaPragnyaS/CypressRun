/// <reference types ="Cypress"/>

describe("Get API user test", () => {
  it("Check Status ", { tags: "@smokeTag" }, () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v1/users",
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.meta.pagination.limit).to.eq(20);
    });
  });
});
it("Get user", { tags: "@smokeTag" }, () => {
  cy.request({
    method: "GET",
    url: "https://gorest.co.in/public/v1/users/1531",
  }).then((res) => {
    const data = res.body;
    expect(data).to.have.all.keys("meta", "data");
    expect(data.data.id).to.eq(1531);
    expect(data.data.name).to.eq("Poorna");
    expect(data.data.gender).to.eq("male");
    expect(data.data.status).to.eq("active");
  });
});
