// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//create a function that prompts the user all the questions we need to ask
function generatePassword() {
  // assign variables
  var lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var numbers = '0123456789'.split('');
  var specialChar = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'.split('');
  var finalPassword = '';
  var finalArray = '';
  var randomCharacter = 0;
  
  var length = prompt('How long do you want your password to be?\n(8-128)') 
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
    while (finalPassword.length < length) {
      // get random character set
      randomCharacter = Math.floor(Math.random() * 4);
      // if they said yes to any of the choices above, randomly choose one of the arrays (from what they chose) (create an array from character type questions) and then randomly pick the index number to add to finalPassword
      // check random character to choices above
      if ( (randomCharacter === 0 && chooseLowercase) || (randomCharacter === 1 && chooseUppercase) || (randomCharacter === 2 && chooseNumbers) || (randomCharacter === 3 && chooseCharacters) ) {

        // generate random index number corresponding to character arrays - use switch
        switch (randomCharacter) {
          case 0 :  // for lowercase
            finalArray = lowercase[Math.floor(Math.random() * lowercase.length)];
            break;
            case 1 : // for uppercase
            finalArray = capitalLetters[Math.floor(Math.random() * capitalLetters.length)];
            break;
            case 2 : // choose number
            ffinalArray = numbers[Math.floor(Math.random() * numbers.length)];
            break;
            case 3 : // choose special character
            finalArray = specialChar[Math.floor(Math.random() * specialChar.length)];
            break;
          }
        //add character to final password string
        finalPassword += finalArray;
      }



    }
    return finalPassword;
}

generateBtn.addEventListener('click', writePassword);