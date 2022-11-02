// create alert box when user has submitted form for blog page and contact page
// display user input from blog form in the comments section

//create variable for blog form and input element
const blogFormEl = document.querySelector(".blogForm");
const blogInputName = document.querySelector("input[id=userName]");
const blogInputEmail = document.querySelector("input[id=userEmail]");
const blogTextarea = document.querySelector("textarea[id=comment]");
// "textarea[name=blogInput]"
//console.log(blogFormEl);

// create a variable to store the existing div container
const commentArea = document.querySelector(".commentArea");

// const commentContainer = document.querySelector(".userComments");

// arrays for weekdays and months with string values for date objects

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// variable d for returning date objects with current date with new Date()
// source: https://www.w3schools.com/js/js_date_methods.asp

const d = new Date();

// shows current weekday as a string thanks to array
let day = days[d.getDay()];
// console.log(day);

// shows current month as a string thanks to array
let month = months[d.getMonth()];
// console.log(month);

// shows current date as a number
let date = d.getDate();
// console.log(date);

// shows current year as a 4-digit number
let year = d.getFullYear();
// console.log(year);

// function definition for dateOrdinal to show date number with appropriate st or nth or rd
// source: https://stackoverflow.com/questions/15397372/javascript-new-date-ordinal-st-nd-rd-th

function dateOrdinal(date) {
    // If statement
    // if: date no ends with 1, return no with st attached to it
    if (date == 31 || date == 21 || date == 1) {
        return date + "st";
    }
    // if: date no ends with 2, return no with nd attached to it
    else if (date == 22 || date == 2) {
        return date + "nd";
    }
    // if: date no ends with 3, return no with rd attached to it
    else if (date == 23 || date == 3) {
        return date + "rd";
    }
    // else: date no ends with other numbers than 1,2 or 3, return no with th attached to it
    else {
        return date + "th";
    }
};

// assign value of calling the dateOrdinal function with date variable as an argument to a variable
const ordinalNumber = dateOrdinal(date);
// console.log(ordinalNumber);

// shows full current date containing weekday, month, date as a number with ordinal and year as 4-digit number
const commentDate = `${day} ${month} ${ordinalNumber}, ${year}`;
// console.log(commentDate);


// add eventListener to listen for when user "submits" blog form
blogFormEl.addEventListener("submit", function(event) {
    // add preventDefault method to stop automatic refreshing when form is submitted - default behaviour of form
    event.preventDefault();
    // console.log(event);
    
    // if statement - if blogFormEl has input, have alert box show up - not needed because of required and type attribute in html code
    
    
    // for loop for clearing the blog form input, each time after form has been submitted (so empty string for input value)
    /*
    for (let i = 0; i < blogInputEl.length;  i += 1) {
        blogInputEl[i].value = "";
    };
    */

    // create variable for value from user input 
    const userName = blogInputName.value;
    const userComment = blogTextarea.value;
    const userEmail = blogInputEmail.value;
    // console.log("commented!");

    // if statement for showing alert box, posting comment with username and comment date to the page and clearing the form input value when user input value not empty and valid
    // form already manages that the form has to be filled out appropriately to an extent thanks to required and type attributes in the HTML code
    if ( userName, userEmail, userComment ) {
        // console.log("You just commented on this page.");
        // console.log( userName, userEmail, userComment );

        // create HTML element 
        // <article><div class="textContainerComment"><h5>name</h5><p>comment</p></div></article>

        const commentContainer = document.createElement("article");
        // add same class to article element as in the already existing comment article elements
        commentContainer.classList.add("comment");

        const inputContainer = document.createElement("div");
        
        // add same class to div container as other existing comments on the page to match the layout 
        inputContainer.classList.add("textContainerComment");

        // create an h5 for the user's name and one p tag with user's comment that show up on the page
        const displayedDateAndName = document.createElement("h5");
        const displayedComment = document.createElement("p");

        // textContent property's value for username(userName variable)
        displayedDateAndName.textContent = `${commentDate} by ${userName}`;
        //userName;
        // console.log(displayedName);

        // textContent property's value for user's comment (userComment variable)
        displayedComment.textContent = userComment;
        // console.log(displayedComment);


        // append the h5 and the paragraph to the div container
        inputContainer.append(displayedDateAndName, displayedComment);
        //console.log(inputContainer);
        
        // append the newly created div container with h5 and p inside to the article element
        commentContainer.appendChild(inputContainer);
        
        // append the article element with the div container inside of it to the other already existing div container
        commentArea.appendChild(commentContainer);
        //console.log(commentContainer);

        // clear the input and textarea values back to an empty string
        blogInputName.value = "";
        blogTextarea.value = "";
        blogInputEmail.value = "";
        //console.log(blogInputName.value);

        //console.log("Thank you! Your comment has been posted to the page.");

        // alert function for when form submitted
        alert("Thank you! Your comment has been posted to the page.");

    };
    
    
} );