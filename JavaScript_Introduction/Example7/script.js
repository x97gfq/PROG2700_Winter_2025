//sample JavaScript files demonstrating each of the concepts:

/*
1. Defining Functions
Defining a simple function
A function declaration defines a named function. These functions are hoisted, meaning they 
can be called before they are defined in the code.
*/
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Calling the function
greet("Alice");


/*
2. Function Expressions
Defining a function expression
A function expression defines a function as part of a larger expression, typically assigning 
it to a variable. These functions are not hoisted, so they cannot be called before they are defined.
*/
const greet = function(name) {
    console.log("Hello, " + name + "!");
};

// Calling the function
greet("Bob");


/*
3. Arrow Functions
Defining an arrow function
Arrow functions are a more concise way to write function expressions. They do not have 
their own this context, which makes them particularly useful in certain situations like 
callbacks or methods inside objects. Arrow functions are also not hoisted.
*/

const greet = (name) => {
    console.log("Hello, " + name + "!");
};

// Calling the function
greet("Charlie");


/*
4. Parameters and Arguments
Function with multiple parameters
*/
function add(a, b) {
    return a + b;
}

// Calling the function with arguments
let sum = add(5, 3);
console.log("Sum: " + sum);


/*
5. Return Values
Function that returns a value
*/
function multiply(a, b) {
    return a * b;
}

// Using the return value
let product = multiply(4, 7);
console.log("Product: " + product);


//These examples should help illustrate the different ways to define and use functions in JavaScript.

/*
Key Differences
•	Syntax: Arrow functions have a shorter syntax compared to function expressions and declarations.
•	this Context: Arrow functions do not have their own this context; they inherit this from 
    the surrounding scope. Function declarations and expressions have their own this context.
•	Hoisting: Function declarations are hoisted, meaning they can be called before they are 
    defined. Function expressions and arrow functions are not hoisted.
*/
