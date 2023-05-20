//This test is designed to test the Login box from the art-gallery project 05/2023

describe("login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/"); // visit the art gallery homepage
  });

  it("should display the login popup", () => {
    cy.contains("login").click(); // Click the login button to open the login popup

    // Check if the login form is visible
    cy.get(".card").should("be.visible");
  });

  it("should allow a user to login", () => {
    cy.contains("login").click(); // Click the login button to open the login popup

    cy.get('input[name="email"]').type("test@test.com"); // Fill in the login form fields
    cy.get('input[name="password"]').type("test1234567890");
    cy.get(".login-submit").click(); // Submit form

    cy.get(".user-name").should("contain", "Test"); //Check that the user is logged in

    // For example, you might check that the login button has been replaced with a logout button:
    cy.contains("logout").should("be.visible");
  });
});
