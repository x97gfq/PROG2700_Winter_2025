document.addEventListener('DOMContentLoaded', function() {
    console.log('The page has fully loaded');
        
    let button = document.getElementById('playGame');
    button.addEventListener('click', function () {
        playGame();
    });

});

function playGame() {
    // Generate two random numbers between 1 and 6
    let firstNumber = Math.floor(Math.random() * 6) + 1;
    let secondNumber = Math.floor(Math.random() * 6) + 1;

    document.getElementById('firstNumber').innerHTML = firstNumber;
    document.getElementById('secondNumber').innerHTML = secondNumber;

    // Log the numbers to the console
    console.log("First Number:", firstNumber);
    console.log("Second Number:", secondNumber);

    // Compare the numbers and log the result
    if (firstNumber > secondNumber) {
        console.log("The first number is higher.");
        document.getElementById('result').innerHTML = "The first number is higher.";
    } else if (firstNumber < secondNumber) {
        console.log("The second number is higher.");
        document.getElementById('result').innerHTML = "The second number is higher.";
    } else {
        console.log("Both numbers are equal.");
        document.getElementById('result').innerHTML = "It's a tie.";
    }
}