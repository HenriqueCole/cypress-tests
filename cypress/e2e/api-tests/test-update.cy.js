describe("Verify if it's possible to update an address", () => {
  it("update is possible", () => {
    cy.request("PUT", "http://localhost:8085/endereco/1", {
      rua: "Rua 1",
      numero: 1,
      cidade: "Cidade 1",
      estado: "Estado 1",
      bairro: "Bairro 1",
      cep: "11111111",
    }).as("TodoRequest");
    cy.get("@TodoRequest").then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});
