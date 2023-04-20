describe("Verify if the field `email` has the @", () => {
  it("field `email` has the @", () => {
    cy.request("GET", "http://localhost:8085/cypress/object-test").as(
      "TodoRequest"
    );
    cy.get("@TodoRequest").then((res) => {
      expect(res.body.email).to.have.string("@");
    });
  });
});
