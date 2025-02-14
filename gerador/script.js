let sliderElement = document.querySelector("#slider"); 
let buttonElement = document.querySelector("#button"); 

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";

sizePassword.innerHTML = sliderElement.value; 

sliderElement.oninput = function() { 
    sizePassword.innerHTML = this.value;
};

buttonElement.onclick = generatePassword;

function generatePassword() {
    let length = sliderElement.value;
    let newPassword = "";
    for (let i = 0; i < length; i++) {
        newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    password.innerText = newPassword;
    containerPassword.classList.remove("hide");
}
