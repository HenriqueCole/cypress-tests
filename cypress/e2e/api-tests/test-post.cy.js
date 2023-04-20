import EnderecoObject from "../../fixtures/object.json";

const link = "http://localhost:8085/endereco";

describe("Verify if post is created", () =>
  it("post is created", () => {
    cy.request("POST", link, EnderecoObject).as("TodoRequest");
    cy.get("@TodoRequest").then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property("rua", EnderecoObject.rua);
    });
  }));
