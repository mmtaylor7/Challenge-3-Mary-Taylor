// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

function promptMe(){

  let passwordLength = prompt("Choose a password length of at least 8 characters but no more than 128 characters");
if (passwordLength>=8 && passwordLength<=128) {
  let numberConfirm = confirm("Do you want numbers in your password?")
  let specialCharacterConfirm = confirm("Do you want special characters in your password?")
  let uppercaseConfirm = confirm("Do you want uppercase letters in your password?")
  let lowercaseConfirm = confirm("Do you want lowercase letters in your password?")
} else if (passwordLength<8){
  alert("Too small")
}
else if (passwordLength>128){
  alert("Too big")
}
}




// promptMe()




// if (passwordLength.text)






