// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }

var rand = Math.random()
return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)]
}

function generatePassword() {

  var userInput = window.prompt("Password should be at least 8 characters")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Try again!")
    return
  } 
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters")
    return
  }

  var userWantsNumbers = window.confirm("Would you like to include numbers with your password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols with your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters with your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters with your password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbollist = ["$", "*", "?", "^", "@", "/", "#", "!"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []


  var optionsCart = []

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList [i] = lowercaseList[i].toUpperCase()
  }

  if (userWantsNumbers === true) {
    optionsCart.push(numberList)
  }
  if (userWantsSymbols === true) {
    optionsCart.push(symbollist)
  }
  if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
  }
  if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
  }


var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    console.log(randomChar)  
  }


}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
