const backBttn = document.querySelector('#back-bttn')
const lightDarkBttn = document.querySelector('#light-dark-bttn');
const blogPost = document.querySelector('#blog-post')

backBttn.addEventListener('click', function (event){
    event.preventDefault();

    setTimeout(function(){
        window.location.href="./index.html";
    }, 2000);

    

});

console.log(backBttn);