// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// assign variables
var lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numbers = '0123456789'.split('');
var specialChar = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'.split('');
var lastArray = letters;
var finalPassword = '';
var x = 0;

//create a function that prompts the user all the questions we need to ask
function question() {
  //if else statement, with >8 return back to beginning, if <128 return back
  var length = prompt('How long do you want your password to be?') 

  if (length < 8 || length > 128) {
    alert('password must between 8 and 128 characters');
    return;
  } 

  if (isNaN(length) === true) {
    alert('password length must be a number');
    return;
  }

  //prompt questions asking about each character type 
  var chooseLowercase = confirm('Would you like to include lowercase letters?');
  var chooseUppercase = confirm('Would you like to include uppercase letters?');
  var chooseNumbers = confirm('Would you like to include numbers?');
  var chooseCharacters = confirm('Would you like to include special characters?');
  //if statement to see if they said yes(true) to at least one of the four questions - if no(false), alert must select at least one character type and return to beginning of questions
  if(!chooseLowercase && !chooseUppercase && !chooseNumbers && !chooseCharacters) {
    alert('You must choose at least one character type from the previous questions');
  } else {
    
  }

  //create object to store all user input 
  //retun object that was created
}

//create function for getting a random element from one of arrays (use math.floor math.random)

question()