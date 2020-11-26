// Assign variables for all four options
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers ="0123456789";
let symbols = "!@#$%^&*(){}[]/><-_+=|`~";
let stringLength = document.getElementById("PasswordLength");

let slider = document.getElementById("PasswordLength");
let output = document.getElementById("sliderDisplay");

output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function() {
  output.innerHTML = this.value;
}

// Generate Password Function
function generatePassword() {
  let length = parseFloat(stringLength.value);
  let allowed = "";
  let password = "";

  // Checking for which checkboxes are checked
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

  // Building the random password based on the length determined by the user
  for(var i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * allowed.length);
    password += allowed[random];
  }

  //Return the randomised password
  return password
  
}

// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var passwordOutput = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordOutput;
;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
