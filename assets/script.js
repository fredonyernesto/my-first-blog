const inputUsername = document.getElementById("username")
const inputTitle = document.getElementById("title")
const inputContent = document.getElementById("content")
const submitBttn = document.getElementById("submit")
const warningMSG = document.getElementById("warning-msg")

function saveInputToLocalStorage (event){
    event.preventDefault();

    const userInput = {
        username: inputUsername.value.trim(),
        title: inputTitle.value.trim(),
        content: inputContent.value.trim(),
    };

    if(userInput !== null){
        warningMSG.style.color = "red"
        warningMSG.innerText = "Please make sure to fill all fields."
    }else{
        localStorage.setItem('userInput', JSON.stringify(userInput));
    }
    
}

submitBttn.addEventListener('click', saveInputToLocalStorage);