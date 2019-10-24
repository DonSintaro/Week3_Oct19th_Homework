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
var runAgain; // Not likely to be used











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

function optionsPW(){
  alert("Please select options for password(s) to include");
  upperOpt = convertToBool(prompt('Upper Case Letters? "y" for Yes, "n" for No'));
  if (upperOpt == null) { 
    alert("An invalid response was given, please try again.");
    return false;
  }
  lowerOpt = convertToBool(prompt('Lower Case Letters? "y" for Yes, "n" for No'));
  if (lowerOpt == null) { 
    alert("An invalid response was given, please try again.");
    return false;
  }
  numbersOpt = convertToBool(prompt('Numbers? "y" for Yes, "n" for No'));
  if (numbersOpt == null) { 
    alert("An invalid response was given, please try again.");
    return false;
  }
  specialOpt = convertToBool(prompt('Special Characters? "y" for Yes, "n" for No'));
  if (specialOpt == null) { 
    alert("An invalid response was given, please try again.");
    return false;
  }
  return true;
}





function generatePW(){

  do{
    runAgain = optionsPW();
  }while (runagain == false);




}


/// need to create series of if statements to determine options in password creation, example: special y/n, numbers y/n
