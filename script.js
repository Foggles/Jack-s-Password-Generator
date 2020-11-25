// Assignment Code
var generateBtn = document.querySelector("#generate");
var slider = document.getElementById("PasswordLength");
var output = document.getElementById("sliderDisplay");

output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function() {
  output.innerHTML = this.value;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
