const inputUsername = document.getElementById("username");
const inputTitle = document.getElementById("title");
const inputContent = document.getElementById("content");
const submitBttn = document.getElementById("submit");
const warningMSG = document.getElementById("warning-msg");

/*Function to display warning message
Set styles for warning message
Set warning message text
*/ 
function displayWarning(message){
    warningMSG.style.color = "red";
    warningMSG.style.marginTop = '10px';
    warningMSG.innerText = message;
}

//Function to save user input to local storage
function saveInputToLocalStorage(event){
    event.preventDefault();

    //Retrieve user input from input fields
    const user = {
        username: inputUsername.value.trim(),
        title: inputTitle.value.trim(),
        content: inputContent.value.trim(),
    };
    // Retrieve the current number of entries from local storage or initialize it to 0
    let numEntries = localStorage.getItem('numEntries');
    if(!numEntries){
        numEntries = 0;
    } else{
        numEntries = parseInt(numEntries);
    }
    /*Generate a unique key for the new entry
      Store the user input in local storage using the generated key
      Increment the number of entries and update it in local storage
      */
    const entryKey = 'user' + numEntries;
    localStorage.setItem(entryKey, JSON.stringify(user));
    localStorage.setItem('numEntries', ++numEntries);

    // Validate user input and display warning messages if necessary
    if(!user.username || !user.title || !user.content){
        displayWarning("Please fill in all fields.");
    } else{
        // Ask for confirmation before submitting the information
        setTimeout(function (){
            let confirmWindow = confirm("Are you sure you want to submit this information?");
            if(!confirmWindow){
            } else 
                // Redirect to main page if user confirms submission
                moveWindow = window.location.href="./main/main.html";
        },1000);
    }
}

// Add event listener to submit button to trigger saveInputToLocalStorage function
submitBttn.addEventListener('click', saveInputToLocalStorage);
