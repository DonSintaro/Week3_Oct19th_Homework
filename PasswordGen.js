var arrayUpper = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var arrayLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arrayNums = ["1","2","3","4","5","6","7","8","9","0"];
var arraySpecials = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"," ","'",'"',";",":",".","[","{","]","}","\\","|",",","<",".",">","/","?","`","~"];

var arrayChar = [arrayUpper,arrayLower,arrayNums,arraySpecials];

var validBool = false;
var userInputBool;
var userInputNum;

var PW;

////Options for desired password////
var specialOpt;
var numbersOpt;
var upperOpt;
var lowerOpt;
var runAgain;

var arrayOpt = [upperOpt,lowerOpt,numbersOpt,specialOpt];

var generateBtn = document.querySelector(".genBtn");
var copyBtn = document.querySelector(".cpyBtn");


generateBtn.addEventListener("click",function(){
    PW = generatePW();
    document.getElementsByClassName('pwText')[0].value = PW;
});

copyBtn.addEventListener("click",function(){
    document.getElementsByClassName('pwText')[0].select();
    document.getElementsByClassName('pwText')[0].setSelectionRange(0,99999);
    document.execCommand("copy");
});




/////////////////Validation of numvber///////////////////////////

function validateNum(x){
var parsed = parseInt(x);
if (isNaN(parsed) || parsed.toString().length != x.length) { 
  return false;
}
return true;
}


//////////////Validation of Limit////////////////////////////////
function validateLimit(){
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
  arrayOpt[0]=upperOpt;
  if (upperOpt == null) { 
    alert("An invalid response was given, please try again.");
    return false;
  }
  lowerOpt = convertToBool(prompt('Lower Case Letters? "y" for Yes, "n" for No'));
  arrayOpt[1]=lowerOpt;
  if (lowerOpt == null) { 
    alert("An invalid response was given, please try again.");
    return false;
  }
  numbersOpt = convertToBool(prompt('Numbers? "y" for Yes, "n" for No'));
  arrayOpt[2]=numbersOpt;
  if (numbersOpt == null) { 
    alert("An invalid response was given, please try again.");
    return false;
  }
  specialOpt = convertToBool(prompt('Special Characters? "y" for Yes, "n" for No'));
  arrayOpt[3]=specialOpt;
  if (specialOpt == null) { 
    alert("An invalid response was given, please try again.");
    return false;
  }
  if ((upperOpt == false)&&(lowerOpt == false)&&(numbersOpt == false)&&(specialOpt == false)){
    alert("Are you sure you want a password?  You have answer yes for at least 1 option.");
    return false;
  }
  return true;
}

function mergeArray(x,i){
  if (arrayOpt[i] == true){
    x.push(arrayChar[i]);
  }
  else{
    x.push(false);
  }
}


function generatePW(){
  var assemble;
  var password = "";
  var arrayMake = [];
  var count = 1;
  do{
    runAgain = optionsPW();
  }while (runAgain == false);

  validateLimit();

  for (var x = 0; x < 4; x++){
    mergeArray(arrayMake,x)
  }
  
  while ((count <=8 ) || (count <= userInputNum)){
    assemble = searchArray(arrayMake);
    if (assemble !== false){
      password = password + searchArray(assemble);
      count++;
    }
  }
  return password;
}


function searchArray(a){
  var b = Math.floor(Math.random() * a.length);
  return a[b];
}


/// need to create series of if statements to determine options in password creation, example: special y/n, numbers y/n
