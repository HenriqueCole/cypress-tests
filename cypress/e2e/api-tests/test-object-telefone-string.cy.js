describe("Verify if the field `telefone` is a string", () => {
  it("field `telefone` is a string", () => {
    cy.request("GET", "http://localhost:8085/cypress/object-test").as(
      "TodoRequest"
    );
    cy.get("@TodoRequest").then((res) => {
      expect(res.body.telefone).to.be.a("string");
    });
  });
});
