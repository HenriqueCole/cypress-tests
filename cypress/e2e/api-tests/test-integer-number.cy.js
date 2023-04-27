describe("Verify value", () => {
  it("value equals to 10", () => {
    cy.request("GET", "http://localhost:8085/cypress").as("TodoRequest");
    cy.get("@TodoRequest").then((res) => {
      expect(res.body).to.eq(10);
    });
  });
});
