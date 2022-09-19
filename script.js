// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);



 //===========================================================
 
 
   

//------------------------------------------------------------


// var generateBtn = document.querySelector("#generate");
// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// function generatePassword() {
//   const text = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVVWYXZ()!@#$%&*/?+-%'.split('')
//   let res = ''
//   for (let i = 0; i < 20; i++) {
//     res += text[Math.floor(Math.random() * text.length)]
//   }
//   return res;
// }

// function writePassword() {
//   passwordText.value = password;
//   passwordText.value;
//   prompt("Do you want lower case letters?")
//   alert("Password Generated!")
// }

// generateBtn.addEventListener("click", writePassword);


//-----------------------------------------------------------------------


const charArr = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVVWYXZ()!@#$%&*/?+-%'.split('');
let charLength = 8;

// Assignment code
let generateBtn = document.querySelector("#generate");

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//define a function that will generate the password from the user prompts.
function generatePassword(){
    for (let i = 0; i <= charLength; i++;)

}

function getPrompts(){
    charLength = parsint(prompt("How many characters long do you want your new password to be?\nChoose between 8 and 128 characters"))

    if(charLength > 8 && charLength < 128);{
    return true;
    }


}
