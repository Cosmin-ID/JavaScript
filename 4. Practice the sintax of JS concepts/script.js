// Variables declared with var, let and const of different data types.

var myVar = "This is a string"; // string variable declared with var.
let myLet = 35;  // number variable declared with let.
const myConst = true;   // Boolean variable declared with const.


// Named, anonymous and built in functions.

function namedFunction() {
    console.log("This is a named function");    // named function.
}
namedFunction();    // calling named function.

let anonimusFunction = function() {
    console.log("This is a anonimus function");     // anonimus function
}
anonimusFunction();   // calling anonimus function.

function myFunction() {
    alert("This is a built in function");    // built in function.
}

// If/ else/ else if and switch conditional statements.


// if. else statment.
let myAge = 34;

if (myAge >= 18) {
    console.log("you are an adult");
} else {
    console.log("You are a minor");
}

// if/ else if/ else.
let traficLighht = "";

if (traficLighht === "red") {
    console.log("Stop!");
} else if (traficLighht === "yelloW") {
    console.log("Slow down.");
} else if (traficLighht === "green") {
    console.log("Go!");
} else {
    console.log("Caution!!!");
}

// switch.
let runnerPosition = "Forth place";

switch (runnerPosition) {
    case "First place":
        console.log("You get the gold medal!");
        break;
    case "Seccond place":
        console.log("You get the silver medal!");
        break;
    case "Third place":
        console.log("You get the bronze medal!");
        break;
    default:
        console.log("No medal aworded."); 
}

// Arrays of different data types.

let mixedArray = [1, "cat", false];     // mixed array data types.
let stringArray = ["cat", "dog", "mouse"];  // string array data type.
let numberArray = [1, 2, 3, 4];    // number array data type.


// Loops through an array.

for (i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray [i]);
}
