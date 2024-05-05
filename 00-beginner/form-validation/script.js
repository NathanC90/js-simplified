// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.getElementById("form")
const formGroups = document.querySelectorAll(".form-group")
const username = document.getElementById("username")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")
const terms = document.getElementById("terms")
let errorMessages = []
const errors = document.querySelector(".errors")
const errorList = document.querySelector(".errors-list")

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener("submit", (e) => {
    //    TODO: Create an array to store all error messages and clear any old error messages
    errorMessages = []
    //    TODO: Define the following validation checks with appropriate error messages
    //      1. Ensure the username is at least 6 characters long
    if(username.value.length < 6) {
        errorMessages.push("Username must be at least 6 characters long")
    }  
    //      2. Ensure the password is at least 10 characters long
    if (password.value.length < 10) {
        errorMessages.push("Password must be at least 10 characters long")
    }
    //      3. Ensure the password and confirmation password match
    if (password.value !== passwordConfirmation.value) {
        errorMessages.push("Passwords must match")
    }
    //      4. Ensure the terms checkbox is checked
    if (terms.checked === false) {
        errorMessages.push("You must accept the terms")
    }
    //    TODO: If there are any errors then prevent the form from submitting and show the error messages
    if(errorMessages.length != 0) {
        e.preventDefault()
        showErrors(errorMessages)
    }
})
// TODO: Define this function
function clearErrors() {
    // Loop through all the children of the error-list element and remove them
    // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
    // I recommend using a while loop to accomplish this task
    // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
    // Also, make sure you remove the show class to the errors container
  }
  
  // TODO: Define this function
  function showErrors(errorMessages) {
    // Add each error to the error-list element
    // Make sure to use an li as the element for each error
    errorMessages.forEach((message) => {
        let errorItems = document.createElement("li")
        errorItems.innerText = message
        console.log(errorItems.innerText)
        errorList.appendChild(errorItems)
    })
    // Also, make sure you add the show class to the errors container
    errors.classList.add("show")
  }