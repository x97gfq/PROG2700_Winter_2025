// script.js

/*
In this script:
    We use var to declare a variable name and log it to the console.
    We use let to declare a variable age and log it to the console.
    We use const to declare a constant country and log it to the console.
    We demonstrate the scope differences between var, let, and const inside a function.
    We show how var and let variables can be reassigned, while const variables cannot be reassigned.
*/

// Using var
var name = "Alice";
console.log("var name:", name);

// Using let
let age = 25;
console.log("let age:", age);

// Using const
const country = "Canada";
console.log("const country:", country);

// Demonstrating scope differences
function scopeExample() {
    if (true) {
        var varVariable = "I am a var variable";
        let letVariable = "I am a let variable";
        const constVariable = "I am a const variable";
    }
    console.log("Inside function - varVariable:", varVariable); // Accessible
    // console.log("Inside function - letVariable:", letVariable); // Error: letVariable is not defined
    // console.log("Inside function - constVariable:", constVariable); // Error: constVariable is not defined
}

scopeExample();

// Demonstrating reassignment
name = "Bob";
console.log("Reassigned var name:", name);

age = 30;
console.log("Reassigned let age:", age);

// country = "USA"; // Error: Assignment to constant variable