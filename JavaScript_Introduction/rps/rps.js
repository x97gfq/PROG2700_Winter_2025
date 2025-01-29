
let wins = 0;

for (let i = 0; i < 100; i++) {

    let choices = ["rock", "paper", "scissors"];

    let player1 = choices[Math.floor(Math.random()*3)];

    console.log("player1", player1);

    let player2 = choices[Math.floor(Math.random()*3)];

    console.log("player2", player2);

    /*
    rock crushes scissors
    scissors cut paper
    paper covers rock
    */
    if (player1 == "rock" && player2 == "scissors") {
        console.log("rock crushes scissors - player1 wins");
        wins++;
    } else if (player1 == "scissors" && player2 == "paper") {
        console.log("scissors cut paper - player1 wins");
        wins++;
    } else if (player1 == "paper" && player2 == "rock") {
        console.log("paper covers rock - player1 wins");
        wins++;
    } else if (player1 == player2) {
        console.log("it's a draw");
    } else {
        console.log("player 2 wins.");
    }

}

console.log("player 1 won " + wins + " games.")
