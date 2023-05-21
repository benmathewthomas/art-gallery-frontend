//This test is designed to test the home page from the art-gallery project 05/2023

describe("HomeView", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/"); // visit the art gallery homepage
  });

  it("displays the correct heading", () => {
    cy.get("h1").should("contain", "Welcome to DDGIT Gallery");
  });

  it("displays the banner image", () => {
    cy.get(".home-banner img").should("be.visible");
  });
});
