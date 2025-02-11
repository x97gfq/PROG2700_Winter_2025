//
//"npm i" to install node modules, then "node index.js" to run this script.
//

const fs = require('fs');

// Load JSON data
fs.readFile('bruinsPlayers.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Parse JSON data
    const jsonData = JSON.parse(data);

    // Iterate over the JSON data
    //
    //
    //

});