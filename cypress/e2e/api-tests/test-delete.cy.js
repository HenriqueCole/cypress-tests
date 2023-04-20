const link = "http://localhost:8085/endereco";
const id = 1;

describe("Verify if it's possible to delete", () => {
  it("delete is possible", () => {
    cy.request("DELETE", `${link}/${id}`).as("TodoRequest");
    cy.get("@TodoRequest").then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});
