//This test is designed to test the exhibitions page from the art-gallery project 05/2023

describe("exhibitions", () => {
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
        {
          backgroundImageUrl: "/spots.jpg",
          name: "Exhibition of Spots",
          description: "The spot and dot collection",
          startDate: "2023-05-01",
          endDate: "2023-06-31",
          location: "Museum 1",
        },
      ],
    }).as("getExhibitions");

    cy.visit("http://localhost:8080/exhibition"); // visit the page containing the Exhibitions
  });

  it("displays the correct headings", () => {
    //Checking the headings in the page
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

  it("displays the data correctly in the table", () => {
    //Checking the table data for the mock data
    cy.wait("@getExhibitions");
    cy.get("table").should("be.visible");
    cy.get("table tr").should("have.length", 3); // check expected number of rows
    cy.get("table tr")
      .eq(1)
      .should("contain", "Exhibition of Cubes")
      .and("contain", "The complete cubisim collection");
    cy.get("table tr")
      .eq(2)
      .should("contain", "Exhibition of Spots")
      .and("contain", "The spot and dot collection");
  });
});
