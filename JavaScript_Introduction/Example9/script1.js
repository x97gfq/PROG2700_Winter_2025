/*
Here's a JavaScript program that creates a JSON array of 5 popular NHL players and 
sorts the array based on different criteria:
*/

// JSON array of NHL players
const players = [
    {
        name: "Connor McDavid",
        team: "Edmonton Oilers",
        position: "Center",
        statistics: {
            goals: 45,
            assists: 67,
            penalties: 12
        }
    },
    {
        name: "Auston Matthews",
        team: "Toronto Maple Leafs",
        position: "Center",
        statistics: {
            goals: 41,
            assists: 52,
            penalties: 10
        }
    },
    {
        name: "Nathan MacKinnon",
        team: "Colorado Avalanche",
        position: "Center",
        statistics: {
            goals: 35,
            assists: 58,
            penalties: 8
        }
    },
    {
        name: "Leon Draisaitl",
        team: "Edmonton Oilers",
        position: "Center",
        statistics: {
            goals: 43,
            assists: 60,
            penalties: 14
        }
    },
    {
        name: "Alex Ovechkin",
        team: "Washington Capitals",
        position: "Left Wing",
        statistics: {
            goals: 50,
            assists: 40,
            penalties: 20
        }
    }
];

// Function to sort players by goals
function sortByGoals(players) {
    return players.sort((a, b) => b.statistics.goals - a.statistics.goals);
}

// Function to sort players by assists
function sortByAssists(players) {
    return players.sort((a, b) => b.statistics.assists - a.statistics.assists);
}

// Function to sort players by penalties
function sortByPenalties(players) {
    return players.sort((a, b) => b.statistics.penalties - a.statistics.penalties);
}

// Example usage
console.log("Sorted by Goals:");
console.log(sortByGoals(players));

console.log("Sorted by Assists:");
console.log(sortByAssists(players));

console.log("Sorted by Penalties:");
console.log(sortByPenalties(players));

/*
Explanation:
JSON Array: The players array contains objects representing NHL players with their name, team, position, and statistics (goals, assists, penalties).
Sorting Functions: Three functions (sortByGoals, sortByAssists, sortByPenalties) are defined to sort the players based on their goals, assists, and penalties, respectively.
Example Usage: The program sorts the players by different criteria and logs the sorted arrays to the console.
You can run this code in a JavaScript environment (like a browser console or Node.js) to see the sorted arrays.
*/
