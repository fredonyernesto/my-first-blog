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

document.querySelector("div > button").addEventListener('click', () =>{
    let element = document.body;
    element.classList.toggle("dark-mode");
});

submitBttn.addEventListener('click', saveInputToLocalStorage);

