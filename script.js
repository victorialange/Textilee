// create responsive hamburger menu/rework menu from html and css
// HAMBURGER MENU TOGGLE

// grabbing existing HTML elements
const burgerMenu = document.querySelector(".hamburgerMenu i");
// const slideOutMenu = document.querySelector(".slideOut");
const slideOutNav = document.querySelector(".hamburgerNav");
const logo = document.querySelector(".hamburgerNav .logo");
//add another class to header when user click icon
// const header= document.querySelector("header");

// function
function toggleNav() {
    burgerMenu.classList.toggle("fa-bars");
    burgerMenu.classList.toggle("fa-times");
    // slideOutMenu.classList.toggle("menuActive");
    slideOutNav.classList.toggle("navActive");
    logo.classList.toggle("noLogo");
    // header.classList.toggle("headerDown");
}

// call function after user clicks on icon
// event listener
burgerMenu.addEventListener("click", (event) => {
    event.preventDefault();
    toggleNav();
});

// toggle again when user clicks nav link
const navLinkOne = document.querySelector(".navLinkOne");
const navLinkTwo = document.querySelector(".navLinkTwo");
const navLinkThree = document.querySelector(".navLinkThree");
const navLinkFour = document.querySelector(".navLinkFour");

// event listener for a tags inside burger menu
navLinkOne.addEventListener("click", (event) => {
  
    toggleNav();
});
navLinkTwo.addEventListener("click", (event) => {
   
    toggleNav();
});
navLinkThree.addEventListener("click", (event) => {
 
    toggleNav();
});
navLinkFour.addEventListener("click", (event) => {
    
    toggleNav();
});
