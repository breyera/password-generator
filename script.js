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
  
  var length = prompt('How long do you want your password to be?') 
  /* loop to prompt them to choose a number, and also a number between 8 and 128 characters */
  while (isNaN(length)) { 
    alert('password length must be a number');
    length = prompt('How long do you want your password to be')
   while (length < 8 || length > 128) {
    alert('password must between 8 and 128 characters');
    length = prompt('How long do you want your password to be?')
  } }


  //prompt questions asking about each character type 
  var chooseLowercase = confirm('Would you like to include lowercase letters?');
  var chooseUppercase = confirm('Would you like to include uppercase letters?');
  var chooseNumbers = confirm('Would you like to include numbers?');
  var chooseCharacters = confirm('Would you like to include special characters?');
  
  while (!chooseLowercase && !chooseUppercase && !chooseNumbers && !chooseCharacters) {
    alert('You must choose at least one character type from the previous questions');
    /* re-asking in the loop what they would like to add so they are prompted again if they they did not choose a single character type */
    chooseLowercase = confirm('Would you like to include lowercase letters?');
    chooseUppercase = confirm('Would you like to include uppercase letters?');
    chooseNumbers = confirm('Would you like to include numbers?');
    chooseCharacters = confirm('Would you like to include special characters?');
  } 
  
   
    // start building password 
    while (finalPassword.length<length) {
      var randomCharacter 
      // if they said yes to any of the choices above, randomly choose one of the arrays (from what they chose) (create an array from character type questions) and then randomly pick the index number to add to finalPassword

      Math.floor(Math.random() * //randomlychosenarray.length)
      
      finalPassword = finalPassword + randomCharacter


    }

  //create object to store all user input 
  //retun object that was created
}



question()