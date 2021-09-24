// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = document.querySelector("uppercase");
var lowerCase = document.querySelector("lowercase");
var numbers = document.querySelector("numbers");
var symbols = document.querySelector("symbols");


var RandFunc = {
  lower: randLow,
  upper: randUpper,
  number: randNumb,
  symbol: randSymb,
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  document.body.appendChild(passwordText);
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  var length = lenght.value;
  console.log(length);
}







function randLow() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
console.log(randLow());


function randUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
console.log(randUpper());


function randNumb() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
console.log(randNumbr());


function randSymb() {
  var symb = '~!@#$%^&*()_-+=:?><;.,';
  return symb(Math.floor(Math.random()*symb*lenght))
}
console.log(randSymb());




