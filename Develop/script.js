

let symbols = `!"#$%&\'()*+,-.`;
let upperCaseCharacters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
let lowerCaseCharacters = `abcdefghijklmnopqrstuvwxyz`;
let numbers = `0123456789`;


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

//this funciton generates a password
//what do i need to get it done? 
//does it need to return something

function generatePassword(length, number, symbol, uppercase, lowercase) {
  
}


 

// function myCoolFunction(a,b,c) {
//   var result = a + b + c;
//   // 11
// }
 
// let twentyValue = myCoolFunction(10,9,1)
// let tenValue = myCoolFunction(3,4,3) 
// let fiveValue = myCoolFunction(1,2,2) 



// console.log("twentyValue: " + twentyValue)
// console.log("tenValue: " + tenValue)
// console.log("fiveValue: " + result)
 



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
        
        writePassword()
        console.log(writePassword());
      }
    }
    else if (passwordLength<8){
      alert("Too small")
    }
    else if (passwordLength>128){
      alert("Too big")
    }


}






























