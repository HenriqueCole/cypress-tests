const link = "http://localhost:8085/endereco";
const id = 2;

describe("Verify if it's possible to get by Id", () => {
  it("get by Id is possible", () => {
    cy.request("GET", `${link}/${id}`).as("TodoRequest");
    cy.get("@TodoRequest").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("id", id);
    });
  });
});
