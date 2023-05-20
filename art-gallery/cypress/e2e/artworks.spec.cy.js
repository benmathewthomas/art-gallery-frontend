//This test is designed to test the artworks/list of artworks page from the art-gallery project 05/2023

describe("artworks", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/artworks"); // visit the page containing the list of artworks
  });

  it("Loads Artworks", () => {
    cy.get(".table-art").should("be.visible"); // Check if table is visible
    cy.get(".table-art").find("tr").its("length").should("be.gt", 1); // Check if there are rows in the table
  });

  it("Searches Artwork", () => {
    cy.get(".search-input").type("The Concert"); // Type name of title of work that is known to be in the database
    cy.get(".table-art").contains("tr", "The Concert").should("be.visible"); //Check that it exisits in the list
  });

  it("Filters Artwork", () => {
    cy.get(".search-input").type("Montezuma's Revenge"); // Type name or work that is not in the database to ensure it returns no results
    cy.get(".table-art")
      .contains("tr", "Montezuma's Revenge")
      .should("not.exist"); // Verify that the table does not contain the title
  });
});
