'use strict';

// Make navbar transparent when it is on the top.
const navbar = document.querySelector('#navbar'); // 엘리먼트 요소를 받아온다.
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add(`navbar--dark`);
    } else {
        navbar.classList.remove(`navbar--dark`);
    }
});