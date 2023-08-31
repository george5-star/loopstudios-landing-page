"use strict";

const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", showNav);
closeBtn.addEventListener("click", hideNav);

function showNav() {
  mobileNav.classList.add("show");
}

function hideNav() {
  mobileNav.classList.remove("show");
}
