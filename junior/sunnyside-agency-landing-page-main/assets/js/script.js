const hamburgerIcon = document.querySelector('.hamburger-icon');
const headerNav = document.querySelector('.nav__mobile');

hamburgerIcon.addEventListener('click', () => {
    headerNav.classList.toggle('nav--appear');
});