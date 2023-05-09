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
const country = document.getElementById("country-form")
const language = document.getElementById("language-form")
const cash = document.getElementById("cash")
const container = document.getElementById("container2")

const blue = document.getElementById("blue")
const red = document.getElementById("red")
const yellow = document.getElementById("yellow")
const yellow2 = document.getElementById("yellow2")
const orange = document.getElementById("orange")
const violet= document.getElementById("violet")
const peru= document.getElementById("peru")
const account = document.getElementById("dd")
const ount = document.getElementById("dd2")
const personalName= document.getElementById("spex")

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
        container.classList.add("container2")
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
        blue.classList.remove("blue")
        red.classList.remove("red")
        yellow.classList.remove("yellow")
        orange.classList.remove("orange")
        violet.classList.remove("violet")
        peru.classList.remove("peru")
        yellow2.classList.remove("yellow2")
        account.classList.remove("fucsia")
        ount.classList.remove("fucsia2")
    } else {
        password.type = "password"
        blue.classList.add("blue")
        red.classList.add("red")
        yellow.classList.add("yellow")
        orange.classList.add("orange")
        violet.classList.add("violet")
        peru.classList.add("peru")
        yellow2.classList.add("yellow2")
        account.classList.add("fucsia")
        ount.classList.add("fucsia2")
        
        
    }
}


function isValidEmailAddress(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) != null;
};

function defaultColor(){
   
            blue.classList.remove("blue")
            red.classList.remove("red")
            yellow.classList.remove("yellow")
            orange.classList.remove("orange")
            violet.classList.remove("violet")
            peru.classList.remove("peru")
           yellow2.classList.remove("yellow2")
           account.classList.remove("fucsia")
           ount.classList.remove("fucsia2")
           personalName.classList.remove("spex")
           container.classList.remove("container2")

            console.log("Hello1")
    }

    function blueC() {
        if (username.value.length != 0){
            blue.classList.add("blue")
            yellow2.classList.add("yellow2")
        } else { blue.classList.remove("blue"); 
                yellow2.classList.remove("yellow2") 
            }
    }
    
    function redR() {
        if (email.value.length != 0){
            red.classList.add("red")
        } else { red.classList.remove("red") }
    }

    function yellowY() {
        if (password.value.length != 0){
            yellow.classList.add("yellow")
        } else { yellow.classList.remove("yellow") }
    }


    function orangeO() {
        if (passwordAgain.value.length != 0){
            orange.classList.add("orange")
        } else { orange.classList.remove("orange") }
    }

    function violetV() {
        if (country.option != "Country"){
            violet.classList.add("violet")
        } else { violet.classList.remove("violet") }
    }
    function peruP() {
        if (language.option != "Language"){
            peru.classList.add("peru")
        } else { peru.classList.remove("peru") }
    }

    function accountC() {
        if (cash.option != "Currency"){
            account.classList.add("fucsia")
            ount.classList.add("fucsia2")
        } else { account.classList.remove("fucsia") }
    } 

    function personal() {
        if (firstName.value.length != 0){
            personalName.classList.add("spex")        
        } else {personalName.classList.remove("spex") }
    }