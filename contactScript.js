// create alert box when user has submitted form for blog page and contact page

// create variables to store contact form and input element
const contactFormEl = document.querySelector(".contactForm");
const contactInputEl = document.querySelectorAll("input[name=contactInput], textarea[name=contactInput]");
// console.log(contactFormEl);

// add eventListener to listen for when user "submits" contact form
contactFormEl.addEventListener("submit", (event) => {
    // add preventDefault method to stop automatic refreshing when form is submitted - default behaviour of form
    event.preventDefault();
    // console.log(event);
    
    // if statement - if contactFormEl has input, have alert box show up 
    if (contactFormEl) {
        //console.log("Thank you! Your message has been sent.");
        // alert function for when form submitted
        alert("Thank you! Your message has been sent.");
        // for loop for clearing the contact form input, each time after form has been submitted (so empty string for input value)
        for (let i = 0; i < contactInputEl.length;  i += 1) {
            contactInputEl[i].value = "";
        };
    };
    
} );


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

