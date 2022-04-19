// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseBox = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseBox = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberBox = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacBox = ["'", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", ":", "?", ">", "<", ";", ".", ",", "|"];
var password = "";
var characters = [];


var lengthEl; 
var upperCase; 
var lowerCase;
var numbers;
var specialCharac;

//FUNCTIONS TO DETERMINE PASSWORD CRITEIRA
//Function to determine password length
function getPasswordLength() {
    lengthEl = prompt("How many characters would you like in your password (enter a number between 8 to 128 characters)? ");
    if (lengthEl.value < 8 || lengthEl.value > 128 || isNaN(lengthEl) ) {
        alert("length should be a number between 8-128 characters");
        getPasswordLength();
    } else if (lengthEl.value >= 8 || lengthEl.value <= 128 || !isNaN(lengthEl)) {
        alert("We need the preferences of your password, for the next questions, please click OK for the types of characters you want to include in your password and cancel for the ones you don't want to include.");
    } else {
    return lengthEl;
    }  
}
    

//Function to determine the use of uppercase in the password
function getUpperCase() {
    upperCase = confirm("Do you want upper case letters in your password?: ");
    if (upperCase === true) {
        for (let i = 0; i < upperCaseBox.length; i++) {
            const letter = upperCaseBox[i];
            characters.push(letter)
        }
        alert("Your password will include uppercase characters");        
    } else {
        alert("Your password won't include uppercase characters");
    }
    // return upperCase;
}

//Function to determine the use of lowercase in the password
function getLowerCase() {
    lowerCase = confirm("Do you want lower case letters in your password?: ");
    if (lowerCase === true) {
        for (let i = 0; i < lowerCaseBox.length; i++) {
            const letter = lowerCaseBox[i];
            characters.push(letter)
        }
        alert("Your password will include lowercase characters");        
    } else {
        alert("Your password won't include lowercase characters");
    }
    // return lowerCase;
}

//Function to determine the use of numbers in the password
function getNumbers() {
    numbers = confirm("Do you want numbers in your password?: ");
    if (numbers === true) {
        for (let i = 0; i < numberBox.length; i++) {
            const letter = numberBox[i];
            characters.push(letter)
        }
        alert("Your password will include numbers");        
    } else {
        alert("Your password won't include numbers");
    }
    return numbers;
}

//Function to determine the use of special characters in the password
function getSpecialCharac() {
    specialCharac = confirm("Do you want special characters in your password?: ");
    if (specialCharac === true) {
        for (let i = 0; i < specialCharacBox.length; i++) {
            const letter = specialCharacBox[i];
            characters.push(letter)
        }
        alert("Your password will include special characters");        
    } else {
        alert("Your password won't include special characters");
    }
    // return specialCharac;
}



//Function to write the password to the password input 
function writePassword() {
    password = "";
    getPasswordLength();
    getUpperCase();
    getLowerCase();
    getNumbers();
    getSpecialCharac();


    for (var i = 0; i < lengthEl; i++) {

        password += characters[Math.floor(Math.random() * characters.length)];
        console.log("the password is: ", password);

    }
    document.querySelector("#password").innerHTML = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


