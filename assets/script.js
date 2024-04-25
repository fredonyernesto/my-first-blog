const submitButton = document.querySelector('#submit');
const usernameEntry = document.querySelector('#username');
const msgDiv = document.querySelector('#msg')
const titleEntry = document.querySelector('#title');
const commentEntry = document.querySelector('#content')

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

    // set new submission to local storage
    if(username === ''){
        displayMessage('error', 'Username cannot be blank');
    } else if (title === ''){
        displayMessage('error', 'Title cannot be blank');
    } else if (content === ''){
        displayMessage('error', 'Content cannot be blank');
    } else {
        displayMessage("success", "Creating your blog entry now!")
    }

    setTimeout(function(){
        window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }, 2000);

   localStorage.setItem('user', JSON.stringify(user));
});

//deleted preview