//Basic variables
console.log("Hola mundo1")
const myInt = 5;
const myFloat = 6.667;
console.log(typeof(myInt));
console.log(typeof(myFloat));

//Fixed number of decimals for floating types
const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

//Converting to number data types
let myNumber = "74";
myNumber += 3;
console.log(myNumber)
console.log(typeof(myNumber))
let myNumber2 = "74";
myNumber2 = Number(myNumber2) + 3;
console.log(myNumber2%2)

//strings
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);
const one = "Hello, ";
const two = "how are you?";
const joined = `First ${one}${two}`;
console.log(joined); // "Hello, how are you?"

/*const button = document.querySelector("button");
            
function greet() {
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener("click", greet);*/

function showMessage() {
    alert("Hello JS!");
}

const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2)

const output = `I like the song.
I gave it a score of 90%`;
console.log(output)
const output2 = "I like the song.\nI gave it a score of 90%"
console.log(output2)