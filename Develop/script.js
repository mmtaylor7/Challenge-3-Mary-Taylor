
let numbersCharacters = `0123456789`;
let symbolsCharacters = `!"#$%&\'()*+,-.`;
let upperCaseCharacters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
let lowerCaseCharacters = `abcdefghijklmnopqrstuvwxyz`;



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

function shuffleWord (word){
  var shuffledWord = '';
  word = word.split('');
  while (word.length > 0) {
    shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
  }
  return shuffledWord;
}

function generatePassword(length, number, symbol, uppercase, lowercase) {
  let userPassword = ""

  if(number===true) {
    userPassword = userPassword + numbersCharacters
  }
  if(symbol===true) {
    userPassword = userPassword + symbolsCharacters
  }
  if(uppercase===true) {
    userPassword = userPassword + upperCaseCharacters
  }
  if(lowercase===true) {
    userPassword = userPassword + lowerCaseCharacters
  }

  return userPassword
}


function promptMe(){
      let passwordLength = prompt("Choose a password length of at least 8 characters but no more than 128 characters");
    if (passwordLength>=8 && passwordLength<=128) {
      let numberConfirm = confirm("Do you want numbers in your password? Press Ok for yes and cancel for no.")
      let symbolConfirm = confirm("Do you want special characters/symbols in your password? Press Ok for yes and cancel for no.")
      let uppercaseConfirm = confirm("Do you want uppercase letters in your password? Press Ok for yes and cancel for no.")
      let lowercaseConfirm = confirm("Do you want lowercase letters in your password? Press Ok for yes and cancel for no.")

      if (numberConfirm===false && symbolConfirm===false && uppercaseConfirm===false && lowercaseConfirm===false) {
        alert("You must select at least 1 character type: numbers, symbols, uppercase or lowercase. Go back to the beginning and try again.")
      } else {

        let myNewPassword = generatePassword(passwordLength, numberConfirm, symbolConfirm, uppercaseConfirm, lowercaseConfirm)
        
        let shuffledWord = shuffleWord(myNewPassword)

        const str = shuffledWord

        const firstn = str.slice(0, passwordLength); 

        }

        writePassword()

        
    }
    else if (passwordLength<8){
      alert("Too small")
    }
    else if (passwordLength>128){
      alert("Too big")
    }


}






























