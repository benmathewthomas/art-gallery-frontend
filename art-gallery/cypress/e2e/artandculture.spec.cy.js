//This test is designed to test the art and culture page from the art-gallery project 05/2023

describe("artandculture", () => {
  beforeEach(() => {
    // Intercept the API calls to artwork of the day and artist of the day and respond with mock data
    cy.intercept("GET", "/api/artworks/of-the-day", {
      body: {
        title: "The Water Lily Pond",
        primaryImageUrl: "/the-water-lilypond.jpg",
        mediaType: "Oil on canvas",
        yearCreated: 1899,
        contributingArtists: ["Claude Monet"],
        description: "Exquisite in its composition of background trees.",
      },
    }).as("getArtworkOfTheDay");

    cy.intercept("GET", "/api/artists/of-the-day", {
      body: {
        displayName: "Cindy Sherman",
        profileImageUrl: "/cindy-sherman.jpg",
        yearOfBirth: "1954",
        placeOfBirth: "USA",
      },
    }).as("getArtistOfTheDay");

    cy.visit("http://localhost:8080/culture"); // visit the art and culture page
  });

  it("displays the correct subheading", () => {
    cy.wait("@getArtistOfTheDay"); // wait for the API call to complete
    cy.get(".card-div .card-subheading")
      .eq(0)
      .should("contain", "Cindy Sherman"); // check mock data appears on the page
  });

  it("displays the correct image", () => {
    cy.wait("@getArtistOfTheDay"); // wait for the API call to complete
    cy.get(".card-div .card-img")
      .eq(0)
      .should("have.attr", "src", "/cindy-sherman.jpg"); // check mock data appears on the page
  });

  it("displays the correct details", () => {
    cy.wait("@getArtistOfTheDay"); // wait for the API call to complete
    cy.get(".card-div .detail").eq(0).should("contain", "Born: 1954, USA"); // check mock data appears on the page
  });

  it("displays the correct image", () => {
    cy.wait("@getArtworkOfTheDay"); // wait for the API call to complete
    cy.get(".card-div .card-img")
      .eq(1)
      .should("have.attr", "src", "/the-water-lilypond.jpg"); // check mock data appears on the page
  });

  it("displays the correct subheading", () => {
    cy.wait("@getArtworkOfTheDay"); // wait for the API call to complete
    cy.get(".card-div .card-subheading")
      .eq(1)
      .should("contain", "The Water Lily Pond"); // check mock data appears on the page
  });

  it("displays the correct details", () => {
    cy.wait("@getArtworkOfTheDay"); // wait for the API call to complete
    cy.get(".card-div .detail").eq(3).should("contain", "Oil on canvas");
    cy.get(".card-div .detail").eq(4).should("contain", "1899");
    cy.get(".card-div .detail").eq(5).should("contain", "Claude Monet");
    cy.get(".card-div .detail-description").should(
      "contain",
      "Exquisite in its composition of background trees."
    ); // check mock data appears on the page
  });
});
