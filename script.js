// Assignment Code

//create arrays for each character type

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create a function that prompts the user all the questions we need to ask
function question() {
  //if else statement, with >8 return back to beginning, if <128 return back
  var length=prompt('How long do you want your password to be?') 

  if (length < 8 || length >128) {
    alert('password must between 8 and 128 characters');
    return;
  } 

  if (isNaN(length) === true) {
    alert('password length must be a number');
    return;
  }

  //prompt questions asking about each character type (use confirm instead of prompt)
  //if statement to see if they said yes(true) to at least one of the four questions - if no(false), alert must select at least one character type and return to beginning of questions

  //create object to store all user input
  //retun object that was created
}

//create function for getting a random element from one of arrays (use math.floor math.random)

question()