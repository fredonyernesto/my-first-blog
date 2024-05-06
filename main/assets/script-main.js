const blogPost = document.getElementById("blog-post");
const blogEntry = document.getElementById("blog-entry");


// Function to retrieve entries from local storage
function getEntriesFromLocalStorage() {
    const entryS = [];

    // Get the number of entries stored in local storage
    const numEntries = parseInt(localStorage.getItem('numEntries')) || 0;

    // Iterate over the keys corresponding to the stored entries
    for (let i = 0; i < numEntries; i++) {
        const entryKey = 'user' + i;
        const storedData = localStorage.getItem(entryKey);
        
        // Parse the JSON data and add it to the entryS array
        if (storedData) {
            const userData = JSON.parse(storedData);
            entryS.push(userData);
        }
    }

    return entryS;
}

// Function to render entries onto the page
function renderEntries() {
    const blogEntry = document.getElementById("blog-entry");
    const entryS = getEntriesFromLocalStorage();

    blogEntry.innerHTML = '';

    // Iterate over the retrieved entries and create HTML elements for each entry
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
document.getElementById("back-button").addEventListener('click', () =>{
        history.back();
    });

// Call the renderEntries function when the page loads
window.addEventListener('load', renderEntries);


    