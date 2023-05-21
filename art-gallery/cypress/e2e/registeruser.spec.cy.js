//This test is designed to test the regsitration box from the art-gallery project 05/2023

describe("login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/"); // visit the art gallery homepage
  });

  it("should display the Sign up popup", () => {
    cy.contains("login").click(); // Click the login button to open the login popup

    cy.get(".card").should("be.visible"); // Check if the login form is visible

    cy.get(".btn-link").click(); // Click the Sign up button to open the user registration.

    cy.get("h1").eq(0).should("contain", "New Account"); //Check to see if it has opened the signup page
  });

  it("should allow the user to sign up", () => {
    cy.contains("login").click(); // Click the login button to open the login popup

    cy.get(".card").should("be.visible"); // Check if the login form is visible

    cy.get(".btn-link").click(); // Click the Sign up button to open the user registration.

    cy.get('input[name="firstName"]').type("Test"); // Fill in the login form fields
    cy.get('input[name="lastName"]').type("Test");
    cy.get('input[name="email"]').type("test@test.com");
    cy.get('input[name="password"]').type("test1234567890");
    cy.get('input[name="passwordConfirmation"]').type("test1234567890");

    cy.get(".signup-submit").click(); //Submit form
    cy.wait(2000); //wait 2 seconds for form to submit

    cy.get(".alert-success").should("contain", "Registration successful"); //Check to see if the user registration was successful
  });
});
