var generateBtn = document.querySelector("#generate");
var chars = chars;
var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

//The prompt will repeat until a number between 8 and 128 is chosen.
function generatePassword() {
  var password = [];
  chars = prompt("How many characters would you like in your password? Minimum 8, maximum 128.");
  while (chars < 8 || chars > 128) {
    chars = prompt("How many characters would you like in your password? Minimum 8, maximum 128.");
  }
  for (i = 0; i <= chars; i++) {
    password = password + values[Math.floor(Math.random() * values.length)];
  } //Line 13 randomly selects values per number of times selected by the user. 
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


