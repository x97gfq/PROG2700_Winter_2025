// script.js

/*
In this example:
    We define a JSON structure students as an array of objects, where each object represents a student with properties name, age, and major.
    We use a for-loop to iterate over the students array.
    Inside the loop, we log each student's name, age, and major to the console.
*/

// Define a JSON structure
let students = [
    {
        "name": "Alice",
        "age": 22,
        "major": "Computer Science"
    },
    {
        "name": "Bob",
        "age": 24,
        "major": "Mathematics"
    },
    {
        "name": "Charlie",
        "age": 23,
        "major": "Physics"
    }
];

// Iterate over the JSON structure using a for-loop
for (let i = 0; i < students.length; i++) {
    console.log("Student Name:", students[i].name);
    console.log("Age:", students[i].age);
    console.log("Major:", students[i].major);
    console.log("-------------------");
}