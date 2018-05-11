"use strict";

// clicking action to event, for the hamburger (From w3schools, I refactored to ECMAScript6)
const menuClick = (event) => event.classList.toggle("change");

// hamburger interaction
const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const drawer = document.querySelector('.nav');
const hamburgerIcon = document.querySelector('.menu-container');

menu.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	e.stopPropagation();
});

// Closes the drawer and returns the menu icon back to ready
main.addEventListener('click', function() {
	drawer.classList.remove('open');
	hamburgerIcon.classList.remove('change');
});

