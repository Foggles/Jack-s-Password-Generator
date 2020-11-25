// Assignment Code
let generateBtn = document.querySelector("#generate");
let slider = document.getElementById("PasswordLength");
let output = document.getElementById("sliderDisplay");
let lowerCheck = document.getElementById("lowercase");
let upperCheck = document.getElementById("uppercase");
let numberCheck = document.getElementById("number");
let specialCheck = document.getElementById("special");

let lowerOutput;

output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function () {
  output.innerHTML = this.value;
}


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Functions to grab random lowercase upper
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>,.'";
  return symbols[Math.floor(Math.random() * symbols.length)];

};

// Write password to the #password input

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
