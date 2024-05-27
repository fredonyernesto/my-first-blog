const existingEntries = JSON.parse(localStorage.getItem('userEntries')) || [];

function displayExistingEntries(){
    const blogPost = document.getElementById("blog-post");
    blogPost.innerHTML = '';
    for (let i=0; i < existingEntries.length; i++){
        const username = document.createElement('h3');
        username.textContent = `Username: ${existingEntries[i].username}`
        const title = document.createElement('h2');
        title.textContent = `Title: ${existingEntries[i].title}`
        const div = document.createElement('div');
        const content = document.createElement('p')
        div.append(username, title, content);
        blogPost.append(div);
    }
};

window.onload = function(){
    displayExistingEntries();
};