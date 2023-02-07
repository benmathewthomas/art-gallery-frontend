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
<br>

## FeaturedArtist

### Properties

None

### Basic Usage

Gets the featured artist from the endpoint, stores in an array and displays this data in a card component.

<br>
<br>

## FeaturedArtwork

### Properties

None

### Basic Usage

Gets the featured artwork from the endpoint, stores in an array and displays this data in a card component.

<br>
<br>

## FooterComponent

### Properties

None

### Basic Usage

Displays the contact information and socials in the footer.

### Components

SocialsComponent is used to display the site socials.

<br>
<br>

## HeaderComponent

### Properties

None

### Basic Usage

Displays the site logo and socials in the header.

### Components

SocialsComponent is used to display the site socials.

<br>
<br>

## LoginComponent

### Properties

None

### Basic Usage

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
<br>

## NavigationComponent

### Properties

None

### Basic Usage

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
<br>

## CollapsibleMenuAntD

### Properties

None

### Basic Usage

The collapsible "hamburger" menu using AntDesign.

### Computed data

#### `mapState()`

Maps the current state of the account from the account store, to determine if there is a user logged in or not.

<br>
<br>

## CollapsibleMenuHTML

### Properties

None

### Basic Usage

The collapsible "hamburger" menu using only HTML.

### Computed data

#### `mapState()`

Maps the current state of the account from the account store, to determine if there is a user logged in or not.

<br>
<br>

## DropdownMenuAntD

### Properties

None

### Basic Usage

The dropdown navigation menu using AntDesign, with hierarchical links allowing users to navigate the site.

### Methods

#### `isAdmin()`

Returns true if a user is logged in and has the role 'Admin'.

#### `mapState()`

Maps the current state of the account from the account store, to determine if there is a user logged in or not.

<br>
<br>

## DropdownMenuHTML

### Properties

None

### Basic Usage

The dropdown navigation menu using only HTML, with links allowing users to navigate the site.

#### `isAdmin()`

Returns true if a user is logged in and has the role 'Admin'.

#### `mapState()`

Maps the current state of the account from the account store, to determine if there is a user logged in or not.

<br>
<br>

## SocialsComponent

### Properties

None

### Basic Usage

Displays links to the site social media sites as svg images, including a text version for accessibility. The current links point to the social media pages for Deakin University.

<br>
<br>

