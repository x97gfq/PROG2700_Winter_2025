
let wins = 0;
let choices = ["rock", "paper", "scissors"];

function getChoice() {
    return choices[Math.floor(Math.random()*3)];
}

/*
rock crushes scissors
scissors cut paper
paper covers rock
*/
function determineWinner(player1, player2) {
    if (player1 == "rock" && player2 == "scissors") {
        console.log("rock crushes scissors - player1 wins");
        return "player1";
    } else if (player1 == "scissors" && player2 == "paper") {
        console.log("scissors cut paper - player1 wins");
        return "player1";
    } else if (player1 == "paper" && player2 == "rock") {
        console.log("paper covers rock - player1 wins");
        return "player1";
    } else if (player1 == player2) {
        return null;
    } else {
        return "player2";
    }
}

for (let i = 0; i < 100; i++) {

    let player1 = getChoice();
    console.log("player1", player1);

    let player2 = getChoice();
    console.log("player2", player2);

    let winner = determineWinner(player1, player2);

    if (winner != null && winner == "player1") {
        wins++;
    }
}

console.log("player 1 won " + wins + " games.")
