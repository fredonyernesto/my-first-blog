const backBttn = document.querySelector('#back-bttn');
const lightDarkBttn = document.querySelector('#light-dark-bttn');
const blogPost = document.querySelector('#blog-post');

backBttn.addEventListener('click', function (event){
    event.preventDefault();
    history.back();
});

lightDarkBttn.addEventListener('click', function (event){
    event.preventDefault();
});

window.addEventListener('DOMContentLoaded', function(){
    const storedEntries = JSON.parse(localStorage.getItem('entries')) || [];
    
    storedEntries.forEach(function(entry){
        const listItem = document.createElement('li');

        listItem.innerHTML = `
            <h2>${entry.username}</h2>
            <h3>${entry.title}</h3>
            <p>${entry.content}</p>
        `;
        blogPost.appendChild(listItem);
    });
});
