const inputUsername = document.getElementById("username")
const inputTitle = document.getElementById("title")
const inputContent = document.getElementById("content")
const submitBttn = document.getElementById("submit")
const warningMSG = document.getElementById("warning-msg")

function displayWarning(message){
    warningMSG.style.color = "red"
    warningMSG.style.marginTop = '10px'
    warningMSG.innerText = message;
}

function saveInputToLocalStorage(event) {
    event.preventDefault();

    let user = {
        username: inputUsername.value.trim(),
        title: inputTitle.value.trim(),
        content: inputContent.value.trim(),
    };

    if (user.username === '') {
        displayWarning("Please fill in your username.");
    } else if (user.title === '') {
        displayWarning("Please add a title.");
    } else if (user.content === '') {
        displayWarning("Please provide content for your submission.");
    } else {
        // Retrieve existing entries from localStorage
        const existingEntries = JSON.parse(localStorage.getItem('userEntries')) || [];

        // Add the new entry
        existingEntries.push(user);

        // Save updated entries back to localStorage
        localStorage.setItem('userEntries', JSON.stringify(existingEntries));

        // Reset all forms
        document.querySelectorAll("form").forEach(form => form.reset());

        // Redirect to another page
        window.location.href = "./main/main.html";
    }
}


submitBttn.addEventListener('click', saveInputToLocalStorage);

// let blogPost = document.getElementById("blog-post");
// const blogEntry = document.getElementById("blog-entry");

// let entryS = [];

// function getInputFromLocalStorage(){
//     const storedData = localStorage.getItem('user')

//     if(storedData){
//         const userData = JSON.parse(storedData);
//         entryS.push(userData);
//     }

//     blogEntry.innerHTML = '';

//     entryS.forEach(entry => {
//         let li = document.createElement('li');

//         li.innerHTML = `
//             <p>Title: ${entry.title}</p>
//             <p>Author: ${entry.username}</p>
//             <p>Content: ${entry.content}</p>
//         `;
//         blogEntry.appendChild(li);
//     });
// }
// getInputFromLocalStorage();