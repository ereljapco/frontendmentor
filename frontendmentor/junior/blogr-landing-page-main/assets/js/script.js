const menuIcon = document.querySelector('.header__menu__icon');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    menuIcon.classList.toggle('close');
});