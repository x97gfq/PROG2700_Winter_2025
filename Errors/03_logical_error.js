// Logical Error Example
function calculateRectangleArea(width, height) {
    return width * width; // Logical error: should be width * height
}

const width = 5;
const height = 10;
console.log(`Area of rectangle: ${calculateRectangleArea(width, height)}`); // Incorrect result