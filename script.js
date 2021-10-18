// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseBox = "abcdefghijklmnopqrstuvwxyz";
var upperCaseBox = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberBox = "0123456789"
var spacialCharacBox = '~!@#$%^&*()_-+=:?><;.,|';

var lengthEl = prompt("How many characters would you like in your password (enter a number between 8 to 128 characters)? ");
var upperCase = confirm("Do you want upper case letters in your password?: ");
var lowerCase = confirm("Do you want lower case letters in your password?: ");
var numbers = confirm("Do you want numbers in your password?: ");
var specialCharac = confirm("Do you want special characters in your password?: ");

// Write password to the #password input
//display the password to the page
//return "Generated password will go here"
//Add event listener to generate button

//FUNCTIONS TO DETERMINE PASSWORD CRITEIRA
//Function to determine password length
function getPasswordLength() {
    lengthEl;
    if (lengthEl.value < 8 || lengthEl.value > 128 || isNaN(lengthEl) ) {
        alert("length should be a number between 8-128 characters");
        getPasswordLength();
    } else {
        alert("We need the preferences of your password, for the nex questions, please click OK for the types of characters you want to include in your password and cancel for the ones you don't want to include.");
    }
    return lengthEl;
}

//Function to determine the use of uppercase in the password
function getUpperCase() {
    upperCase;
    if (upperCase == true) {
        alert("Your password will include uppercase characters");        
    } else {
        alert("Your password won't include uppercase characters");
    }
    return upperCase;
}

//Function to determine the use of lowercase in the password
function getLowerCase() {
    lowerCase;
    if (lowerCase == true) {
        alert("Your password will include lowercase characters");        
    } else {
        alert("Your password won't include lowercase characters");
    }
    return lowerCase;
}

//Function to determine the use of numbers in the password
function getNumbers() {
    numbers;
    if (numbers == true) {
        alert("Your password will include numbers");        
    } else {
        alert("Your password won't include numbers");
    }
    return numbers;
}

//Function to determine the use of special characters in the password
function getNumbers() {
    specialCharac;
    if (specialCharac == true) {
        alert("Your password will include special characters");        
    } else {
        alert("Your password won't include special characters");
    }
    return specialCharac;
}


























































// // Write password to the #password input
// function generatePassword() {
    
//     if (lengthEl.value < 8 || lengthEl.value > 128) {
//         alert("length should be between 8-128 characters");
//         generatePassword();
//     }

//     function randLow() {
//         if (upperCase==="Y"); 
//         return String.fromCharCode(Math.floor(Math.random()*26)+97);
//     }
    
//     function randUpper() {
//         if (lowerCase==="Y") 
//         return String.fromCharCode(Math.floor(Math.random()*26)+65);
//     }
    
//     function randNumbr() {
//         if (numbers==="Y") 
//         return String.fromCharCode(Math.floor(Math.random()*10)+48);
//     }

 
//     function randSymb() {
//         // var symb = '~!@#$%^&*()_-+=:?><;.,|';
//         if (symbols==="Y")
//         return symb[Math.floor(Math.random()*symb*lenght)];
//     }

//     var randFunc = {lower: randLow, upper: randUpper, number: randNumbr, symbol: randSymb};

//     var finalPassword = "";

//     var typesCount = lower + upper + number + symbol;

//     var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]
//     );

//     if (typesCount ===0) {
//     alert("Please select at least one character type");
//     generatePassword()
//     }

//     for(let i = 0; i<lenght; i += typesCount) {
//     typesArr.forEach(type => {
//     var funcName = Object.keys(type) [0];
//     generatedPassword += randFunc[funcName]();
    
//     });
    
//         //  //display the password to the page
    
//         //return "Generated password will go here";//
    
//     var finalPassword = generatedPassword.slice(0, lengthEl);
//     return finalPassword;
// }
// }


// function writePassword() {
//     var password = finalPassword();
//     var passwordText = document.querySelector("#password");
//     passwordText.value = password;
// }


// // Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword);
