//2. Using the new Object() Syntax
// Creating an object using the new Object() syntax
const person = new Object();
person.name = "Bob";
person.age = 30;
person.greet = function() {
    console.log("Hello, my name is " + this.name);
};

// Accessing object properties and methods
console.log(person.name); // Output: Bob
person.greet(); // Output: Hello, my name is Bob