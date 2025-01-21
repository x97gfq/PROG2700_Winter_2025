// script.js

/*
This script does the following:
    Generates two random numbers between 1 and 100 using Math.random() and Math.floor().
    Logs the generated numbers to the console.
    Compares the two numbers and logs which one is higher, or if they are equal.
*/

// Generate two random numbers between 1 and 100
let firstNumber = Math.floor(Math.random() * 100) + 1;
let secondNumber = Math.floor(Math.random() * 100) + 1;

// Log the numbers to the console
console.log("First Number:", firstNumber);
console.log("Second Number:", secondNumber);

// Compare the numbers and log the result
if (firstNumber > secondNumber) {
    console.log("The first number is higher.");
} else if (firstNumber < secondNumber) {
    console.log("The second number is higher.");
} else {
    console.log("Both numbers are equal.");
}



