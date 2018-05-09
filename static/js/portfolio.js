"use strict";


const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const drawer = document.querySelector('.nav');

menu.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	e.stopPropagation();
});

main.addEventListener('click', function() {
	drawer.classList.remove('open');
});