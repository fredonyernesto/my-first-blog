const backBttn = document.querySelector('#back-bttn');
const lightDarkBttn = document.querySelector('#light-dark-bttn');
const blogPost = document.querySelector('#blog-post');
const submitButton = document.querySelector('#submit');
const usernameEntry = document.querySelector('#username');
const titleEntry = document.querySelector('#title');
const commentEntry = document.querySelector('#content')

backBttn.addEventListener('click', function (event){
    event.preventDefault();
    history.back();
});

lightDarkBttn.addEventListener('click', function (event){
    event.preventDefault();
    

});

submitButton.addEventListener('click', function (event){
    event.preventDefault();
    // create user object from submission
    const user = {
        username: usernameEntry.value.trim(),
        title: titleEntry.value.trim(),
        content: commentEntry.value.trim(),
    };

    

    localStorage.setItem('user', JSON.stringify(user));
    
});

