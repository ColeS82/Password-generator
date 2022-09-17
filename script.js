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



let generateBtn = document.querySelector("#generate");




function passGen(){
  let text = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVVWYXZ()!@#$%&*/?+-%".split("");
  let randomIdnex = Math.floor(Math.random() * text.length);

  return text[randomIdnex];


}


let randomPass = passGen();
console.log(randomPass);


// function greetings(){
//   let x = ["hello", "good", "buddy"];
//   let randomIndex = Math.floor(Math.random() * x.length);
// for (let i = 0; i < x.length; i++)
//  console.log(x[i])

// //return x[randomIndex];

// }
// let hello = greetings()
// console.log(hello)



