describe("Verify if the result is an object", () => {
  it("result is an object", () => {
    cy.request("GET", "http://localhost:8085/cypress/object-test").as(
      "TodoRequest"
    );
    cy.get("@TodoRequest").then((res) => {
      expect(res.body).to.be.an("object");
    });
  });
});
