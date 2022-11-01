// create alert box when user has submitted form for blog page and contact page
// display user input from blog form in the comments section

//create variable for blog form and input element
const blogFormEl = document.querySelector(".blogForm");
const blogInputName = document.querySelector("input[id=userName]");
const blogInputEmail = document.querySelector("input[id=userEmail]");
const blogTextarea = document.querySelector("textarea[id=comment]");

// "textarea[name=blogInput]"
const commentArea = document.querySelector(".commentArea");

// const commentContainer = document.querySelector(".userComments");

//console.log(blogFormEl);

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
    // console.log("commented!");
    

    if ( userName, userEmail ,userComment ) {
        console.log("You just commented on this page.");
        console.log( userName, userComment );

        // create HTML element 
        // <div class="textContainerComment"><h5>name</h5><p>comment</p></div>

        const commentContainer = document.createElement("article");
        commentContainer.classList.add("comment");

        const inputContainer = document.createElement("div");
        //commentEl.innerHTML = `<i class="far fa-square"></i>`;
        inputContainer.classList.add("textContainerComment");

        // create an h5 for username and one p tag with user's comment
        const displayedName = document.createElement("h5");

        const displayedComment = document.createElement("p");

        // textContent property's value for username(userName variable)
        displayedName.textContent = userName;
        console.log(displayedName);

        // textContent property's value for user's comment (userComment variable)
        displayedComment.textContent = userComment;
        console.log(displayedComment);


        // append the two paragraphs as a child to the list element
        
        inputContainer.appendChild(displayedName);
        inputContainer.appendChild(displayedComment);
        console.log(inputContainer);
        

        // create a variable to store the existing ul element
        
        // append the dynamically created list element to the ul
        commentContainer.appendChild(inputContainer);
        //commentContainer.appendChild(displayedComment);
        //console.log(commentContainer);

        commentArea.appendChild(commentContainer);
        
        // clear the input and textarea values back to an empty string
        blogInputName.value = "";
        blogTextarea.value = "";
        blogInputEmail.value = "";
        //console.log(blogInputEl);

        //console.log("Thank you! Your comment has been posted to the page.");
        // alert function for when form submitted
        alert("Thank you! Your comment has been posted to the page.");

    };
    
    
} );