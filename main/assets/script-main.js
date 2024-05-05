const blogPost = document.getElementById("blog-post");
const blogEntry = document.getElementById("blog-entry");

const entryS = [];


function getInputFromLocalStorage(){
    const storedData = localStorage.getItem('user')

    if(storedData){
        const userData = JSON.parse(storedData);
        entryS.push(userData);
    }

    blogEntry.innerHTML = '';

    entryS.forEach(entry => {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <p>Title: ${entry.title}</p>
            <p>Author: ${entry.username}</p>
            <p>Content: ${entry.content}</p>
        `;
        blogEntry.appendChild(li);
    });
}
getInputFromLocalStorage();