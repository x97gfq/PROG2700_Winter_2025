//3. Constructor Function
// Creating an object using a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name);
    };
}

// Creating instances of the Person object
const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

// Accessing object properties and methods
console.log(alice.name); // Output: Alice
alice.greet(); // Output: Hello, my name is Alice
console.log(bob.name); // Output: Bob
bob.greet(); // Output: Hello, my name is Bob