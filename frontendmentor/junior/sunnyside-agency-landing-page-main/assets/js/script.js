const hamburgerIcon = document.querySelector('.hamburger-icon');
const headerNav = document.querySelector('header > .header__top > nav');

// hamburgerIcon.addEventListener('click', () => {
//     if (headerNav.style.visibility === 'hidden') {
//         headerNav.style.visibility = 'visible';
//     } else {
//         headerNav.style.visibility = 'hidden';
//     }
// });

hamburgerIcon.addEventListener('click', () => {
    if (headerNav.classList.contains('nav--appear')) {
        headerNav.classList.remove('nav--appear');
    } else {
        headerNav.classList.add('nav--appear');
    }
});

