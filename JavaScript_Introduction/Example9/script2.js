/*
Here's a JavaScript program that creates a JSON array of 5 popular Super Mario Smash Brothers 
characters and sorts the array based on different criteria:
*/

// JSON array of Super Mario Smash Brothers characters
const characters = [
    {
        name: "Mario",
        team: "Mushroom Kingdom",
        position: "All-Rounder",
        statistics: {
            power: 80,
            speed: 70,
            defense: 75
        }
    },
    {
        name: "Luigi",
        team: "Mushroom Kingdom",
        position: "All-Rounder",
        statistics: {
            power: 75,
            speed: 65,
            defense: 70
        }
    },
    {
        name: "Bowser",
        team: "Koopa Troop",
        position: "Heavyweight",
        statistics: {
            power: 95,
            speed: 50,
            defense: 90
        }
    },
    {
        name: "Peach",
        team: "Mushroom Kingdom",
        position: "Lightweight",
        statistics: {
            power: 60,
            speed: 80,
            defense: 65
        }
    },
    {
        name: "Yoshi",
        team: "Yoshi's Island",
        position: "All-Rounder",
        statistics: {
            power: 70,
            speed: 85,
            defense: 60
        }
    }
];

// Function to sort characters by power
function sortByPower(characters) {
    return characters.sort((a, b) => b.statistics.power - a.statistics.power);
}

// Function to sort characters by speed
function sortBySpeed(characters) {
    return characters.sort((a, b) => b.statistics.speed - a.statistics.speed);
}

// Function to sort characters by defense
function sortByDefense(characters) {
    return characters.sort((a, b) => b.statistics.defense - a.statistics.defense);
}

// Example usage
console.log("Sorted by Power:");
console.log(sortByPower(characters));

console.log("Sorted by Speed:");
console.log(sortBySpeed(characters));

console.log("Sorted by Defense:");
console.log(sortByDefense(characters));

/*
Explanation:
JSON Array: The characters array contains objects representing Super Mario Smash Brothers characters with their name, team, position, and statistics (power, speed, defense).
Sorting Functions: Three functions (sortByPower, sortBySpeed, sortByDefense) are defined to sort the characters based on their power, speed, and defense, respectively.
Example Usage: The program sorts the characters by different criteria and logs the sorted arrays to the console.
You can run this code in a JavaScript environment (like a browser console or Node.js) to see the sorted arrays.
*/
