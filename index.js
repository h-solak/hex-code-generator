const chars = ["a","b","c","d","e","f",0,1,2,3,4,5,6,7,8,9]; //characters that an hex code contains
let hexcode = [];
let a;
let myElement = document.querySelector(".background-all");

let finalColor = "" //initial color (I could have made it random too)
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

    return finalColor
}

//start screen with some text and a random background
let firstColor = hexcodeFunc()
myElement.style.backgroundColor = firstColor;
document.querySelector(".result").innerHTML = "<div>Let's begin!<br><h6>(click to copy the hex code)</h6></div>";

const hexcodeToPage = () => {

    myElement.style.backgroundColor = hexcodeFunc()

    //putting previous colors on the screen as little boxes
    let div = document.createElement("div");
    div.style.width = "75px";
    div.style.height = "30px";
    div.style.background = finalColor;
    div.style.borderRadius = "10px";
    div.style.paddingTop = "5px";
    div.innerHTML = finalColor;

    document.getElementById("previous").appendChild(div);

    //storing the previous colors
    allColors[counter] = finalColor;
    counter++;

    //current color
    document.querySelector(".result").innerHTML = allColors[counter-1];

}

//a function to copy the current color when user clicks on the text under the main button
const copy = (copyId) => {
    navigator.clipboard.writeText(finalColor)
}