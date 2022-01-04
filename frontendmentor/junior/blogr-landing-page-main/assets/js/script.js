const menuIcon = document.querySelector('.header__nav-icon');
const headerMenu = document.querySelector('.header__nav')
let headerNavItem = document.querySelectorAll('.header__nav-item');

// Opens and closes mobile menu
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('header__nav-icon--open');
    menuIcon.classList.toggle('header__nav-icon--close');
    headerMenu.classList.toggle('header__nav--close');
    headerMenu.classList.toggle('header__nav--open');
});

headerNavItem.forEach((e) => {
    e.querySelector('.header__nav-title').addEventListener('click', () => {
        e.querySelector('.header__nav-title').classList.toggle('header__nav-title--close');
        e.querySelector('.header__nav-title').classList.toggle('header__nav-title--open');
        e.querySelector('.header__subnav-list').classList.toggle('header__subnav-list--close');
        e.querySelector('.header__subnav-list').classList.toggle('header__subnav-list--open');
    });
});