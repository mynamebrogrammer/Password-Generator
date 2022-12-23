// Assignment code here
var characterSets = {
  numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  special: ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"],
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
};

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  if (confirmLength <= 7 || confirmLength >= 129) {
    alert("Password length must be between 8-128 characters Try again");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
  } else
    alert("Your password will have " + confirmLength + " characters.");

  var specialChar = confirm("Include special characters?");
  var numericChar = confirm("Include numeric characters?");
  var lowerCase = confirm("Include lowercase characters?");
  var upperCase = confirm("Include uppercase characters?");

  while (upperCase === false && lowerCase === false && specialChar === false && numericChar === false) {
    alert("You must choose at least 1 option.");
    var specialChar = confirm("Include special characters?");
    var numericChar = confirm("Include numeric characters?");
    var lowerCase = confirm("Include lowercase characters?");
    var upperCase = confirm("Iinclude uppercase characters?");
  }
  alert(`Your password will include special, numeric, upper, and lowercase characters.`);

  var characters = [];

  if (specialChar) {
    characters = characters.concat(characterSets.special);
  }
  if (numericChar) {
    characters = characters.concat(characterSets.numeric);
  }
  if (lowerCase) {
    characters = characters.concat(characterSets.lower);
  }
  if (upperCase) {
    characters = characters.concat(characterSets.upper);
  }


  console.log(characters);

  var ranPass = "";

  for (let i = 0; i < confirmLength; i++) {
    ranPass += characters[Math.floor(Math.random() * characters.length)];
    console.log(ranPass);
  }

  return ranPass;
}

  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
