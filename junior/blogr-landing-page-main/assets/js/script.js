const menuIcon = document.querySelector('.header__nav-icon');
const headerMenu = document.querySelector('.header__nav')
let headerNavItem = document.querySelectorAll('.header__nav-item');

// Opens and closes mobile navigation
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('header__nav-icon--open');
    menuIcon.classList.toggle('header__nav-icon--close');
    headerMenu.classList.toggle('header__nav--close');
    headerMenu.classList.toggle('header__nav--open');
});

// Changes the hamburger icon and opens/closes subnav when its header__nav-item is clicked.
for (let i = 0; i < headerNavItem.length; i++) {
    headerNavItem[i].addEventListener('click', () => {
        headerNavItem[i].querySelector('.header__nav-title').classList.toggle('header__nav-title--close');
        headerNavItem[i].querySelector('.header__nav-title').classList.toggle('header__nav-title--open');
        headerNavItem[i].querySelector('.header__subnav-list').classList.toggle('header__subnav-list--close');
        headerNavItem[i].querySelector('.header__subnav-list').classList.toggle('header__subnav-list--open');

        // Closes opened subnavigation if another header__nav-item is clicked.
        for (let j = 0; j < headerNavItem.length; j++) {
            if (headerNavItem[i] !== headerNavItem[j] && headerNavItem[j].querySelector('.header__nav-title').classList.contains('header__nav-title--open')) {
                headerNavItem[j].querySelector('.header__nav-title').classList.remove('header__nav-title--open');
                headerNavItem[j].querySelector('.header__nav-title').classList.add('header__nav-title--close');
                headerNavItem[j].querySelector('.header__subnav-list').classList.remove('header__subnav-list--open');
                headerNavItem[j].querySelector('.header__subnav-list').classList.add('header__subnav-list--close');
            }
        }
    });
}