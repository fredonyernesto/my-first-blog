const submitButton = document.querySelector('#submit');
const usernameEntry = document.querySelector('#username');
const msgDiv = document.querySelector('#msg');
const titleEntry = document.querySelector('#title');
const commentEntry = document.querySelector('#content');

function displayMessage(type, message){
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
}

submitButton.addEventListener('click', function (event){
    event.preventDefault();

    // create user object from submission
    const user = {
        username: usernameEntry.value.trim(),
        title: titleEntry.value.trim(),
        content: commentEntry.value.trim(),
    };

    // Retrieve existing entries from local storage
    let allEntries = JSON.parse(localStorage.getItem('entries')) || [];

    // Add the new entry to the existing entries
    allEntries.push(user);

    // Save the updated entries back to local storage
    localStorage.setItem('entries', JSON.stringify(allEntries));

    // set new submission to local storage
    if(user.username === ''){
        displayMessage('error', 'Username cannot be blank');
    } else if (user.title === ''){
        displayMessage('error', 'Title cannot be blank');
    } else if (user.content === ''){
        displayMessage('error', 'Content cannot be blank');
    } else {
        displayMessage("success", "Creating your blog entry now!")
        setTimeout(function(){
            window.location.href = "./assets/main/main.html";
        }, 2000);    
    }
});
