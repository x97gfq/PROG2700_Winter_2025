
// JSON string
const jsonString = '{"name": "Patrice Bergeron", "age": 37, "position": "Center"}';

// Parse JSON string into JavaScript object
const player = JSON.parse(jsonString);

// Access properties

console.log(player.name);
console.log(player.age);
console.log(player.position);


