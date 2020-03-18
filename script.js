
const hamburger = document.querySelector(".menu-hamburger");
const menu = document.querySelector("nav");

function toggleMenu() {
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        hamburger.querySelector('img').src = "./images/icon-hamburger.svg";
    } else {
        menu.classList.add("open");
        hamburger.querySelector('img').src = "./images/icon-close.svg"
    }
}

hamburger.addEventListener('click', toggleMenu);







const input = document.querySelector('.email');
const messageEle = document.querySelector('.message');
const button = document.querySelector('.submit');


const addEmail = "Please insert a valid email";
const fixEmail = "Please insert a valid email";
const thanksEmail = "Thanks for your interest"

button.addEventListener('click', validateEntry);
input.addEventListener('click', clearMessage);

function validateEntry(e) {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!input.value){
      message = addEmail;
      errorMessage(message);
      
    }else if (!re.test(input.value)){
      message = fixEmail;
      input.value = "";
      input.placeholder = "email@example/com";
      errorMessage(message);
    }else{
      message = thanksEmail;
      successMessage(message);
    }
    e.preventDefault();
  }
  function errorMessage(){
      messageEle.className = " message errorMessage";
      messageEle.innerText = message;
      document.querySelector(".email").style.borderColor = "#f96262";
      document.querySelector(".email").style.borderWidth = "1px";
  event.preventDefault();
  
   }
  function successMessage(){
      messageEle.className = " message successMessage";
      messageEle.innerText = message;
      document.querySelector(".email").style.borderColor = "green";
      document.querySelector(".email").style.borderWidth = "2px";
    event.preventDefault();
  }
   function clearMessage(){
     input.value = "";
     input.placeholder= "";
     document.querySelector(".email").style.borderColor = "";
   }