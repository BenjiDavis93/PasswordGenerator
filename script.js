const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", 
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=", //16
"{","[","}","]",",","|",":",";","<",">",".","?","/"]; //13

const input = document.querySelector('input');
const checkBox = document.getElementById("check-symbols");
const lengthEl = document.getElementById("selected-length");
const passwordFieldOne = document.getElementById("pas-btn1");
const passwordFieldTwo = document.getElementById("pas-btn2");
const pasButton1 = document.getElementById("pas-btn1");
const pasButton2 = document.getElementById("pas-btn2");

let isChecked = true;
let passwordLength = 15;

input.addEventListener('input', updateLength);
checkBox.addEventListener('input', updateCheck);

function updateLength(e) {
    lengthEl.textContent = e.target.value;
    passwordLength = e.target.value;
}
function updateCheck(){
    if(checkBox.checked)
        isChecked = true;
    else
        isChecked = false;
}

function generatePassword(){
    let generatedPassword = "";
    let symbols = 0;
    if(isChecked===false)
        symbols+=29;
    let randIndex = 0;
    for(let i=0; i<passwordLength;i++){
        randIndex = Math.floor( Math.random()*(characters.length-symbols) );
        generatedPassword+=characters[randIndex];
    }
    return generatedPassword;
}

function fillPasswords(){
    passwordFieldOne.textContent = generatePassword();
    passwordFieldTwo.textContent = generatePassword();
}

function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
  
    // Place in the top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
  
    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';
  
    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = 0;
  
    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
  
    // Avoid flash of the white box if rendered for any reason.
    textArea.style.background = 'transparent';
  
    textArea.value = text;
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  
    document.body.removeChild(textArea);
  }
  
pasButton1.addEventListener('click', function(event) {
    copyTextToClipboard(pasButton1.textContent);
  });
  
pasButton2.addEventListener('click', function(event) {
    copyTextToClipboard(pasButton2.textContent);
  });