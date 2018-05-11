"use strict";

// clicking action to x, for the hamburger (from w3schools, I refactored to ECMAScript6)
const menuClick = (event) => event.classList.toggle("change");

// hamburger interaction
const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const drawer = document.querySelector('.nav');
const hambugerIcon = document.querySelector('.menu-container')

menu.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	e.stopPropagation();
});


main.addEventListener('click', function() {
	drawer.classList.remove('open');
	hambugerIcon.classList.remove('change');
});

