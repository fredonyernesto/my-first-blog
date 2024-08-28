const existingEntries = JSON.parse(localStorage.getItem('userEntries')) || [];

function displayExistingEntries(){
    const blogPost = document.getElementById("blog-post");
    blogPost.innerHTML = '';
    existingEntries.forEach(function(entry){
        const username = document.createElement('h4');
            username.textContent = `Posted by: ${entry.username}`
            const title = document.createElement('h2');
            title.textContent = `Title: ${entry.title}`
            const div = document.createElement('div');
            const content = document.createElement('p');
            content.textContent = `Content: ${entry.content}`;
            div.classList.add('entries')
            div.append(title, content, username);
            blogPost.append(div);
    })
};


window.onload = function(){
    displayExistingEntries();
};

document.getElementById("back-button").addEventListener("click", () => {
    history.back();
}); 

document.querySelector("#dark-mode-function > button").addEventListener('click', () =>{
    let element = document.body;
    element.classList.toggle("dark-mode");
});