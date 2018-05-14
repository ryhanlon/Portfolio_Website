"use strict";

// clicking action to event, for the hamburger icon (From w3schools, I refactored to ECMAScript6)
const menuClick = (event) => event.classList.toggle("change");

// hamburger interaction, (This like is from Lesson 14: Common Responsive Patterns Module)

const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const drawer = document.querySelector('.nav');
const hamburgerIcon = document.querySelector('.menu-container');

menu.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	// stops the event from bubbling up to parent elements or capturing down to child elements (w3schools)
	e.stopPropagation();
});

// Closes the drawer and returns the menu icon back to ready
main.addEventListener('click', function() {
	// When body of website is clicked, drawer returns to closed position.
	drawer.classList.remove('open');

	// Added to return the  menu icon to starting state when the body is clicked
	hamburgerIcon.classList.remove('change');
});

