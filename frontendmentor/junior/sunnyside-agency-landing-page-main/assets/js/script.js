const hamburgerIcon = document.querySelector('.hamburger-icon > button');
const headerNav = document.querySelector('header > .header__top > .nav__mobile');

hamburgerIcon.addEventListener('click', () => {
    if (headerNav.classList.contains('nav--appear')) {
        headerNav.classList.remove('nav--appear');
    } else {
        headerNav.classList.add('nav--appear');
    }
});

