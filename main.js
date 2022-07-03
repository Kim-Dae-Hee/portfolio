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

// Handle scrolling when tapping on the navbar menu
// Javascript scroll to id
const navbarMenu = document.querySelector(`.navbar__menu`);
navbarMenu.addEventListener(`click`, (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
});

// Handle Click on "Contact me" button on home
// Javascript scroll to id
const homeContactBtn = document.querySelector(`.home__contact`);
homeContactBtn.addEventListener(`click`, (event) => {
    scrollIntoView(`#contact`);
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(`.home__container`);
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener(`scroll`, () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior : `smooth` });
}

