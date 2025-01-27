//1. Object Literal
// Creating an object using object literal syntax
const person = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Accessing object properties and methods
console.log(person.name); // Output: Alice
person.greet(); // Output: Hello, my name is Alice