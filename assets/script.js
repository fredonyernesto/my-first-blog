const inputUsername = document.getElementById("username")
const inputTitle = document.getElementById("title")
const inputContent = document.getElementById("content")
const submitBttn = document.getElementById("submit")
const warningMSG = document.getElementById("warning-msg")

function saveInputToLocalStorage (){

    const userInput = {
        username: inputUsername.value.trim(),
        title: inputTitle.value.trim(),
        content: inputContent.value.trim(),
    };

    localStorage.setItem('userInput', JSON.stringify(userInput));
    
}

submitBttn.addEventListener('click', function(event){
    event.preventDefault();
    saveInputToLocalStorage();
    
}); 