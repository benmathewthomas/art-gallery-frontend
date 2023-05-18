describe("FeaturedArtist", () => {
  beforeEach(() => {
    // Intercept the API call and respond with mock data
    cy.intercept("GET", "/api/artists/of-the-day", {
      body: {
        displayName: "Wattan Artist",
        profileImageUrl: "/wattan-artist.jpg",
        yearOfBirth: "1960",
        placeOfBirth: "Canada",
      },
    }).as("getArtistOfTheDay");

    cy.visit("http://localhost:8080/artistofday"); // visit the page containing the Featured Artist
  });

  it("displays the correct subheading", () => {
    cy.wait("@getArtistOfTheDay"); // wait for the API call to complete
    cy.get(".card-div .card-subheading").should("contain", "Wattan Artist");
  });

  it("displays the correct image", () => {
    cy.wait("@getArtistOfTheDay"); // wait for the API call to complete
    cy.get(".card-div .card-img").should(
      "have.attr",
      "src",
      "/wattan-artist.jpg"
    );
  });

  it("displays the correct detail", () => {
    cy.wait("@getArtistOfTheDay"); // wait for the API call to complete
    cy.get(".card-div .detail").should("contain", "Born: 1960, Canada");
  });
});
