describe("ExhibitionsView", () => {
  beforeEach(() => {
    // Intercept the API call and respond with mock data
    cy.intercept("GET", "/api/exhibitions", {
      body: [
        {
          backgroundImageUrl: "/cubeimage.jpg",
          name: "Exhibition of Cubes",
          description: "The complete cubisim collection",
          startDate: "2023-05-01",
          endDate: "2023-05-31",
          location: "Museum 1",
        },
      ],
    }).as("getExhibitions");

    cy.visit("http://localhost:8080/exhibition"); // visit the page containing the Exhibitions
  });

  it("displays the correct headings", () => {
    cy.wait("@getExhibitions"); // wait for the API call to complete
    cy.get("h1").eq(0).should("contain", "EXHIBITIONS");
    cy.get("h1")
      .eq(1)
      .should(
        "contain",
        "Ant Design table using Vue's list and conditional rendering"
      );
    cy.get("h1")
      .eq(2)
      .should(
        "contain",
        "HTML table using Vue's list and conditional rendering"
      );
  });

  // Add other tests as necessary to check the contents of the tables
});
