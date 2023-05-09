const username = document.getElementById("username")
const email = document.getElementById("email")
const statusTry = document.querySelector(".status")
const password = document.getElementById("password")
const passwordAgain = document.getElementById("passwordAgain")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const street = document.getElementById("street")
const region = document.getElementById("region")
const postalCode = document.getElementById("postalCode")
const accountCreation = document.querySelector(".accountCreation")
const birthYear = document.getElementById("birthyears")
const errorMessage = document.querySelector(".errorMessage")
const input = document.getElementById(".form-control username")
const c = document.getElementById("dd")


init()
createAccount()
function validEmail() {
    if (email.value.includes(username.value)) {
        statusTry.innerText.value = "The username and email are to similar"
        statusTry.classList.add("error")
    } else {
        statusTry.innerHTML = ""
    }
    if (!isValidEmailAddress(email.value)) {
        statusTry.innerHTML = "Email adress is not valid"
        statusTry.classList.add("error")
    }
}

function validPassword() {
    if (passwordAgain.value !== password.value) {
        errorMessage.innerHTML = "The passwords are not the same"
        errorMessage.classList.add("error")
    } else {
        errorMessage.innerHTML = " "
    }
    return
}

function createAccount() {
    if (username.value.length === 0 || email.value.length === 0 || password.value.length === 0
        || firstName.value.length === 0 || lastName.value.length === 0 ||
        street.value.length === 0 || region.value.length === 0 || postalCode.value.length === 0) {
        accountCreation.classList.add("error")
        accountCreation.innerHTML = "You need to fill in all fields"
    } else {
        accountCreation.classList.remove("error")
        accountCreation.innerHTML = "Creation of account successfull"
    }
}

function init() {
    let options = ""
    for (let year = 1900; year <= 2023; year++) {
        options += `<option value="${year}">${year}</option>`
    }
    console.log(options)
    birthYear.innerHTML = options
}


function togglePassword() {
    if (password.type === "password") {
        password.type = "text"
    } else {
        password.type = "password"
    }
}


function isValidEmailAddress(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) != null;
};

function changeColor(){
    if (input.value !== ""){
        c.classList.add(".blue")
         
    }
    else {
        c.classList.remove(".blue")
    }

}



    

