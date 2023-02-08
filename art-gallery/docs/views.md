---
title: Views
---

### [ < Return Home ](./README.md)

# Views

## AboutView

Contains the site author information.

### Components

`HeadingComponent` is used to display the page heading.

<br>
<br>

## ContactView

A blank view for adding contact information or a contact form.

### Components

`HeadingComponent` is used to display the page heading.

<br>
<br>

## HomeView

Home page displaying a splash image (open access artwork) and a message to the user if one is logged in.

### Components

`HeadingComponent` is used to display the page heading.

### Computed data

#### `mapState()`

Maps the current state of the account from the account store, to determine if there is a user logged in or not.

<br>
<br>

## LoginView

User login view.

### Components

`HeadingComponent` is used to display the page heading.
`LoginComponent` is the login form, used to submit the user's account information.

<br>
<br>

## SignUpView

User registration view, for new users.

The sign up form fields use `vee-validate` to validate the user input before it is sent to the back end. The custom rules used for validation are:

| name | description |
|---------|------------------|
| required | Form will not submit without a given value
| min | Field has a minimum character requirement
| max | Field has a maximum character requirement
| valid-name | Uses a regex to check for a valid name input
| valid-email | Uses a regex to check for a valid email input


### Components

`HeadingComponent` is used to display the page heading.
`Form` is used to create the sign up form.
`Field` is the form input fields.
`ErrorMessage` is used to display custom errors for each form field based on the custom rules given above.

### Computed data

#### `mapState()`

Maps the current state of the account from the account store, to determine if there is a user logged in or not.

### Methods

#### back()

Returns to the home page.

#### handleSubmit()

Handles sending the user information given in the sign up form to the account service.
