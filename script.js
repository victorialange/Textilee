// create alert box when user has submitted form for blog page and contact page

// create variable to store contact form and input element
const contactFormEl = document.querySelector(".contactForm");
const contactInputEl = document.querySelectorAll("input[name=contactInput], textarea[name=contactInput]");

//console.log(contactFormEl);

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

