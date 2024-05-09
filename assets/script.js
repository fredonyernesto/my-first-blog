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

function saveInputToLocalStorage (event){
    event.preventDefault();
    
    const user = {
        username: inputUsername.value.trim(),
        title: inputTitle.value.trim(),
        content: inputContent.value.trim(),
    };


    localStorage.setItem('user', JSON.stringify(user));

    if(user.username === ''){
        displayWarning("Please fill in your username.")
    } else if(user.title === ''){
        displayWarning("Please add a title.")
    } else if(user.content === ''){
        displayWarning("Please provide content for your submission.")
    } else{
        setTimeout(function (){
            let moveWindow;
            let confirmWindow = confirm("Are you sure you want to submit this information?");
            if(confirmWindow === false){
                clearTimeout();
            } else {
                moveWindow = window.location.href="./main/main.html";
                confirmWindow = moveWindow; 
            }
        },1000)
    }
}

submitBttn.addEventListener('click', saveInputToLocalStorage);