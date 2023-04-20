describe("Verify if the object has the field `nome`", () => {
  it("object has the field `nome`", () => {
    cy.request("GET", "http://localhost:8085/cypress/object-test").as(
      "TodoRequest"
    );
    cy.get("@TodoRequest").then((res) => {
      expect(res.body).to.have.property("nome");
    });
  });
});
