var arrayLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arrayUpper = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var arrayNums = [1,2,3,4,5,6,7,8,9,0];
var arraySpecials = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"," ","'",'"',";",":",".","[","{","]","}","\\","|",",","<",".",">","/","?","`","~"];


var validBool = false;
var userInputBool;
var userInputNum;

////Options for desired password////
var specialOpt;
var numbersOpt;
var upperOpt;
var lowerOpt;




var randomNum = Math.floor((Math.random() * userLimit)+1);









/////////////////Validation of numvber///////////////////////////

function validateNum(x){
var parsed = parseInt(x);
if (isNaN(parsed) || parsed.toString().length != x.length) { 
  return false;
}
return true;
}


//////////////Validation of Limit////////////////////////////////
function validateLimit(userInputNum){
  do { 

    userInputNum = prompt("Choose a length number between 8 and 128 characters: ");
    validBool = validateNum(userInputNum);

    if ((validBool == false) || (userInputNum > 128) || (userInputNum < 8)) {
      alert("That is not a proper input, please try again..");  
    }
  }
  while ((validBool == false) || (userInputNum > 128) || (userInputNum < 8));
}

///////////General use convert Y/N to true/false/null////////////
function convertToBool(x){
  if (x.toUpperCase() === "Y"){
    return true;
  }
  else if (x.toUpperCase() === "N"){
    return false;
  }
  else{
    return null;
  }
}

/// need to create series of if statements to determine options in password creation, example: special y/n, numbers y/n
