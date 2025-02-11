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

  
  // Task: Calculate the sum of a specific property in a JSON array
  
  
  // Task: Calculate the average of a specific property in a JSON array
  
  
  // Task: Count the number of items in a JSON array
  
  
  
});
