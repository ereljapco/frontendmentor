const menuIcon = document.querySelector('.header__menu__icon');
const headerMenu = document.querySelector('.header__menu')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('icon--open');
    menuIcon.classList.toggle('icon--close');
    headerMenu.classList.toggle('menu--close');
    headerMenu.classList.toggle('menu--open');
});