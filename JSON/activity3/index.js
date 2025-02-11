//
// run "npm i" (for fs) before "node index.js"
//

const fs = require('fs');

// Load JSON data
fs.readFile('playerData.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Parse JSON data
  const jsonData = JSON.parse(data);
  console.log(jsonData.players);
  
  // Task: Calculate the sum of a specific property in a JSON array
  let goals = 0;
  for (let i = 0; i < jsonData.players.length; i++) {
    goals += jsonData.players[i].goals;
  }
  console.log("total goals: ", goals);

  let goals2 = jsonData.players.reduce((sum, player) => sum + player.goals, 0);
  console.log("total goals: ", goals2);

  let totalAge = jsonData.players.reduce((sum, player) => sum + player.age, 0);
  console.log("total ages: ", totalAge);

  // Task: Calculate the average of a specific property in a JSON array
  console.log("avg goals: ", goals / jsonData.players.length);
  
  // Task: Count the number of items in a JSON array
  console.log("total players: ", jsonData.players.length);
  
  
});
