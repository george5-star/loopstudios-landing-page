# Frontend Mentor - Loopstudios landing page solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Project screenshot](./src/assets/project-screenshot.jpg)

## My process

### Built with

- BEM
- Flexbox
- CSS Grid
- Semantic HTML5 markup
- CSS custom properties
- Accessibility in mind
- Mobile-first workflow

### What I learned

```html
<div class="content">
  <a href="#">
    <div class="content-overlay"></div>
    <img
      class="content-image desktop"
      src="./src/assets/desktop/image-grid.jpg"
      alt="the grid"
    />
    <img
      class="content-image mobile"
      src="./src/assets/mobile/image-grid.jpg"
      alt="the grid"
    />
    <div class="content-details fadeIn-bottom">
      <p>The grid</p>
    </div>
  </a>
</div>
```

```css
.content {
  position: relative;
  margin-inline: auto;
  transition: all 0.4s ease-in-out 0s;
}

.content-overlay {
  background: var(--overlay);
  position: absolute;
  height: 99%;
  width: 100%;
  inset: 0;
  opacity: 1;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay {
  background: rgba(255, 255, 255, 0.7);
}

.content-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.content-details {
  position: absolute;
  text-align: left;
  padding-left: 1em;
  padding-right: 1em;
  bottom: 20%;
  left: 40%;
  width: 70%;
  opacity: 1;
  transform: translate(-50%, 75%);
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details {
  transition: all 0.3s ease-in-out 0s;
  top: 50%;
  left: 40%;
  opacity: 1;
}

.content:hover .content-details p {
  color: #000;
}

.content-details p {
  color: #fff;
  font-size: 2.5rem;
  font-family: var(--ff-secondary);
  text-transform: uppercase;
}

.fadeIn-bottom {
  top: 80%;
}
```

Well, there is way more to css than I thought and in this project, I learned a little bit about css transitions.

### Continued development

Going forward, I will focus on how to add the little big details like smooth transitions, animations, etc.

### Useful resources

- [Simple image overlay](https://codepen.io/ArnaudBalland/pen/vGZKLr?editors=1100) - This pen on codepen helped me implement the simple image overlay in the grid section.

## Author

- Website - [George Asiedu](https://www.georgeasiedu.tech)
- Frontend Mentor - [@george5-star](https://www.frontendmentor.io/profile/george5-star)
- Twitter - [@george5_star](https://www.twitter.com/george5_star)
