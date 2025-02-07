// Runtime Error Example
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0)); // This will cause a runtime error
} catch (error) {
    console.error(error.message); // Handling the error
}