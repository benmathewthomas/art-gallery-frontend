---
title: Components
---


# Components

## CardComponent

### Properties

| name | type |
|---------|------------------|
| heading | string
| imageURL | string
| subHeading | string
| detail1 | string
| detail2 | string
| detail3 | string
| detail4 | string

### Basic Usage

A basic card to display a heading, image, text etc.

::: tip
Card has a flexible-sized container so can be used to display many different types of information.
:::

<br>

## FeaturedArtist

### Properties

None

### Basic Usage

Gets the featured artist from the endpoint, stores in an array and displays this data in a card component.

<br>

## FooterComponent

Displays the contact information and socials in the footer.

### Components

SocialsComponent is used to display the site socials.

<br>

## HeaderComponent

Displays the site logo and socials in the header.

### Components

SocialsComponent is used to display the site socials.

<br>

## LoginComponent

A login form where users can sign into their account, or be directed to the sign up page to register a new account.

### Components

Uses VeeValidate components for the form, fields, and error messages which appear when input is incorrect.

### Computed data

#### `mapState()`

Maps the current state of the account from the account store, to determine if there is a user logged in or not.

### Methods

#### `mapAction()`

Maps the actions from the authentication service that can alter the state of the account, in order to log a user in or out.

#### `handleLogin()`

Passes the data in the email and password fields to the authentication service.

<br>

## NavigationComponent

The navigation element for the page, allowing the user to navigate the site. It also displays a message to the user if there is a user logged in.

For narrow screen widths such as mobile devices, only a collapsible menu will display. For wider screens both a dropdown menu and a collapsible menu are used.

::: tip
You can quickly switch between the two designs (pure HTML and using Ant Design) by changing the `usingAntDesign` variable.
:::

### Components

* The LoginComponent is used to provide quick access for the user to login without navigating to the login page.
* DropdownMenuAntD and DropdownMenuHTML provide two options for the navigation dropdown menu, organised hierarchically.
* CollapsibleMenuAntD and CollapsibleMenuHTML are two options for the collapsible 'hamburger' style menu.

### Methods

#### `toggleLogin()`

Shows or hides the floating login window.

#### `toggleMenu()`

Shows or hides the collapsible menu.

#### `logout()`

Logs the user out using the authentication service.

### Computed data

#### `mapState()`

Maps the current state of the account from the account store, to determine if there is a user logged in or not.

<br>

## CollapsibleMenuAntD

The collapsible "hamburger" menu using AntDesign.

### Computed data

#### `mapState()`

Maps the current state of the account from the account store, to determine if there is a user logged in or not.

<br>

## CollapsibleMenuHTML

The collapsible "hamburger" menu using only HTML.

### Computed data

#### `mapState()`

Maps the current state of the account from the account store, to determine if there is a user logged in or not.

<br>

## DropdownMenuAntD

The dropdown navigation menu using AntDesign, with hierarchical links allowing users to navigate the site.

### Methods

#### `isAdmin()`

Returns true if a user is logged in and has the role 'Admin'.

#### `mapState()`

Maps the current state of the account from the account store, to determine if there is a user logged in or not.

<br>

## DropdownMenuHTML

The dropdown navigation menu using only HTML, with links allowing users to navigate the site.

#### `isAdmin()`

Returns true if a user is logged in and has the role 'Admin'.

#### `mapState()`

Maps the current state of the account from the account store, to determine if there is a user logged in or not.

<br>

## SocialsComponent

Displays links to the site social media sites as svg images, including a text version for accessibility. The current links point to the social media pages for Deakin University.

<br>

# Services

## AuthService

Used to create the auth header for API requests which require authentication.

## UserService

* Handles user login and registration requests by sending API requests to the relevant end points.
* Receives token data and stores relevant information in the account store.

### Methods

#### `Login()`

Authenticates user information gathered using the LoginComponent's form data, and creates user data if login is successful, including:
* The token, for making authenticated requests
* The user's given name for displaying a message in the navigation component
* The expiry of the token to enable logout when tokens expire
* The user's role

#### `Logout()`

Logs a user out by deleting the stored user information from local storage and reloading the page.

#### `handleLoginResponse()`

Receives the request from the Login() method, sends it to the API and handles the data received in the API response.

#### `SignUp()`

Submits user information gathered using the registration form data.

#### `handleSignupResponse()`

Receives the request from the SignUp() method, sends it to the API and handles the data received in the API response.

<br>

# Stored data

## Account store

Handles actions relating to user account authentication, sending requests to the user service and changing the locally stored data in response.

Dispatches requests to the alert store when a user is successfully registered, or on receiving an error from the user service.

### actions

#### `login()`

Stores a record of the login request, and then a record of whether the login attempt was a success or a failure.

#### `logout()`

Stores a logout.

#### `register()`

Stores a request for registration, and then a record of whether the registration attempt was a success or a failure.

<br>

## Alert Store

Used by the Vue app to display alerts to the user regarding login or registration success or error.

### actions

#### `success()`

Displays a success message.

#### `error()`

Displays an error message.

#### `clear()`

Clears messages from the alert area.