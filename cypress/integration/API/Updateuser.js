describe("Update username", () => {
  let randomText = "";
  let testEmail = "";
  it("Update user ", { tags: "@regressionTag" }, () => {
    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 10; i++)
      randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
    testEmail = randomText + "@gmail.com";
    cy.request({
      method: "PUT",
      url: "https://gorest.co.in/public/v1/users/1531",
      body: {
        name: "Poorna Pragnya",
        gender: "male",
        email: testEmail,
        status: "active",
      },
      headers: {
        authorization:
          "Bearer bb604f2169891f6ea48dea3048860ff3f30702831f7f903435f5a250dcacb556",
      },
    }).then((res) => {
      const data = res.body;
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(200);
      expect(data.data).has.property("email", testEmail);
      expect(data.data).has.property("name", "Poorna Pragnya");
      expect(data.data).has.property("status", "active");
      expect(data.data).has.property("gender", "male");
    });
  });
});
