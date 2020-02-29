//Empty string storing values from prompt
let randomChar = "";
// This Object is used throughout the password generation process. Its storing the values that will be outputed, and 
// is also used in the prompt. 
let charObj = [
    {
        char: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
        category: "Special Characters",
        choice: false
    },
    {
        char: "0123456789",
        category: "Number Characters",
        choice: false
        
    },
    {
        char: "abcdefghijklmnopqrstuvwxyz",
        category: "Lowercase Letters",
        choice: false
        
    },
    {
        char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        category: "Uppercase Letters",
        choice: false
        
    }
]

// Generate button function that displays prompts deciding if user wants to use
// Special characters, Numbers, Lowercase letters, or Uppercase Letters.
// The prompt pulls from the object which has the values for each option.


var generateButton = () => {
    //Prompt to choose length 
    let passwordLength = parseInt(prompt("Please select a password length between 8 and 128 characters."));
    let passwordString = "";
    //If statement determining if the password length is within the parameters.
    if (passwordLength >= 8 && passwordLength <= 128) {
        //Using the for each function this pulls from the object and sets the value to true if this user types yes.
        charObj.forEach(set => {
            // changes everything to uppercase for if statement.
            const useChar = (prompt(`Would you like to include ${set.category}?`)).toUpperCase();
            if (useChar === "YES") {
                set.choice = true;
            }
            if(set.choice){
                randomChar = randomChar + set.char;
            }
        });
        
    }
    // Validation check if the input is outside of the parameter of 8 and 128
    else {
        alert("Your password does not meet requirements");
    }
    //password generation that pulls from the previous function and outputs a random, letter
    // number or special character based off user choice
    if (randomChar !== "") {
        for (i = 1; i <= passwordLength; i++) {
            passwordString = passwordString + randomChar.charAt(Math.floor(Math.random() * Math.floor((randomChar.length) - 1)));
        }

        document.getElementById("passwordPlacement").value = passwordString;
    }
    //  Validation check if user does not select any values
    else {
        alert("Please select one input type.");
    }
}


//"pseudocode for current bugs"

//function objReset(){
//charObj.forEach(set =>
  //  {
    //    set.choice = false;
    //}
    //)
//}

//objReset();

// Application works on first password generation
// need to find a way to reset boolean value for object
//unless the page is refreshed if the boolean value is set to true on the first password generation it will stay true 
// even if you try to set it to false
// attempted to do it without a "Reset" button but could not get it to work.