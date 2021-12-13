# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](/assets/images/preview.png)

### Links

- Solution URL: [Github](https://github.com/erelita/coding-challenges/tree/main/frontendmentor/newbie/nft-preview-card-component-main)
- Live Site URL: [Netlify](https://nft-preview-card-byer.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- BEM methodology
- Flexbox
- Mobile-first workflow

### What I learned

Used **clamp()** for some properties instead of using **media queary**.

```css
.nft-img {
    width: clamp(275px, 70vw, 300px);
    height: clamp(275px, 70vh, 300px);
    margin-bottom: 1.5rem;
    border-radius: 10px;
    overflow: hidden;
}
```

At first, I didn't know how to implement the hover effect for the NFT Equilibrium. Thankfully, I found a solution at W3Schools.

```html
<a href="#">
  <div class="nft-img__view">
    <img src="/assets/images/icon-view.svg" alt="" aria-hidden="true">
  </div>
</a>
```

```css
.nft-img__view {
    position: relative;
    top: -102.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    height: 105%;
    background: hsla(178, 100%, 50%, 0.5);
    opacity: 0;
    transition: 0.5s ease;
}

.nft-img__view:hover{
    opacity: 1;
}
```


### Continued development

I want to learn more about responsive design without using media queries, utilizing flexbox, CSS grid and css properties.

I enjoyed using BEM. I hope I can still implement it when I learn SASS int the future.

### Useful resources

- [9elements - BEM Cheat Sheet](https://9elements.com/bem-cheat-sheet/) - I wanted to implement BEM methodology because I want to have organized and clean HTML and CSS. This article from 9elements is an effective guide for me, especially with their examples.
- [MDN Web Docs - clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()) - I first knew clamp() from one of Kevin Powell's video on Youtube. I thought that I can practice using it with this small project. This documentation explains it well and with good examples.
- [W3Schools - How TO - Image Hover Overlay](https://www.w3schools.com/howto/howto_css_image_overlay.asp) - Learned an efficient way to implement a hover overlay.

## Author

- Github - [@erelita](https://github.com/erelita)
- Frontend Mentor - [@erelita](https://www.frontendmentor.io/profile/erelita)

