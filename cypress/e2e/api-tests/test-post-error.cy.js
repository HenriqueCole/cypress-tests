const link = "http://localhost:8085/endereco";

describe("Verify if it doesn't succeed an post", () => {
  it("post doesn't succeed", () => {
    cy.request({
      method: "POST",
      url: link,
      failOnStatusCode: false,
      body: {
        rua: "Rua Treze",
        numero: 321,
        cidade: "Santa Catarina",
        estado: "SC",
        bairro: "Estrada Nova",
        cep: 4444444,
      },
    }).as("TodoRequest");
    cy.get("@TodoRequest").then((res) => {
      expect(res.status).to.eq(400);
    });
  });
});
