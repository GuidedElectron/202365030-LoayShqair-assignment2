# Technical Documentation

## Overview
This portfolio website is built using plain HTML, CSS, and JavaScript. No external frameworks are required.

## Main Interactive Features

### 1. Live Project Search
A search input is connected to JavaScript logic that listens for the `input` event. As the user types, each project card is checked against the search text using its title, tags, and visible text. Non-matching cards are hidden, and a results counter is updated.

### 2. Theme Preference with localStorage
A theme toggle button switches between dark and light mode by adding or removing the `theme-light` class on the root HTML element. The selected theme is saved using `localStorage`, so it remains the same when the page is reopened.

### 3. Contact Form Validation
The contact form uses JavaScript validation before submission. It checks for:
- empty name field
- empty email field
- empty message field
- invalid email format

If validation fails, the page shows a friendly error message. If validation succeeds, the page shows a confirmation message.

## User Feedback and Error Handling
The page gives direct feedback in these cases:
- invalid form input
- successful form validation
- zero search results through an empty-state message

## Animation and Transitions
The interface includes simple transitions such as:
- hover movement on buttons and cards
- smooth appearance for form messages
- smooth theme and input transitions

## Responsiveness
The layout adapts using CSS Grid and media queries for desktop, tablet, and mobile screen sizes.
