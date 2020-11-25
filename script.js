// Assign variables for all four options
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers ="0123456789";
var symbols = "!@#$%^&*(){}[]/><-_+=|`~";

// Generate Password Function
function generatePassword() {
  var allowed = '';

  if (document.getElementById("uppercase").checked) {
    allowed += uppercase;
  };

  if (document.getElementById("lowercase").checked) {
    allowed += lowercase;
  };

  if (document.getElementById("number").checked) {
    allowed += numbers;
  };

  if (document.getElementById("special").checked) {
    allowed += symbols;
  };
}

// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
