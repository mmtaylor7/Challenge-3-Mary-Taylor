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
  promptMeAgain()
} else {
  window.alert("Invalid Entry")
}
}

function promptMeAgain(){
  
}


// promptMe()




// if (passwordLength.text)






