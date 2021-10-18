const chars = ["a","b","c","d","e","f",0,1,2,3,4,5,6,7,8,9]; //characters that an hex code contains
let hexcode = [];
let a;
let myElement = document.querySelector(".background-all");

let finalColor = "#191919" //initial color (I could have made it random too)
document.querySelector(".result").innerHTML = finalColor;
myElement.style.backgroundColor = finalColor;

let counter = 0;
let allColors = [];


const hexcodeFunc = () => {

    //generating the random letters and numbers as an array
    for (let i = 0; i<6; i++) {
        a = chars[Math.floor(Math.random()*15)]
        hexcode[i] = a;
    };

    let hexcodeString = hexcode.toString();

    finalColor = "#"+hexcodeString.replace(/,/g,"") //deleting commas
    
    document.querySelector(".result").innerHTML = finalColor;

    myElement.style.backgroundColor = finalColor; //set finalColor as the background color


    //putting previous colors on the screen as little boxes
    let div = document.createElement("div");
    div.style.width = "70px";
    div.style.height = "20px";
    div.style.background = finalColor;
    div.style.color = "white";
    div.style.border = "solid black"
    div.style.margin = "1px";
    div.style.borderWidth = "3.5px"

    div.innerHTML = finalColor;

    document.getElementById("previous").appendChild(div);

    //storing the previous colors
    allColors[counter] = finalColor;
    counter++;
}

//a function to copy the current color when user clicks on the text under the button
const copy = (copyId) => {
    let inputElement = document.createElement("input");
    inputElement.type = "text";

    let copyText = document.getElementById(copyId).innerHTML;
    inputElement.value = copyText;

    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);

}