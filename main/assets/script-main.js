const existingEntries = JSON.parse(localStorage.getItem('userEntries')) || [];

function displayExistingEntries(){
    const blogPost = document.getElementById("blog-post");
    blogPost.innerHTML = '';
    for (let i=0; i < existingEntries.length; i++){
        const username = document.createElement('h4');
        username.textContent = `Posted by: ${existingEntries[i].username}`
        const title = document.createElement('h2');
        title.textContent = `Title: ${existingEntries[i].title}`
        const div = document.createElement('div');
        const content = document.createElement('p');
        content.textContent = `Content: ${existingEntries[i].content}`;
        div.classList.add('entries')
        div.append(title, content, username);
        blogPost.append(div);
    }
};

window.onload = function(){
    displayExistingEntries();
};

document.getElementById("back-button").addEventListener("click", () => {
    history.back();
}); 