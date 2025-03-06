
let cards = [1,3,1,2,3,2];

document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
});

function initializeGame() {
    // Your game initialization code here
    console.log('Game initialized!');
}

let numberOfMoves = 0;
let numberCardsShown = 0;
let card1 = null;
let card2 = null;
let waitForTimeout = false;

function flipCard(cardNumber) {

    if (waitForTimeout) return false;

    numberCardsShown++;

    if (numberCardsShown == 2) {
        if (card1 == cardNumber) {
            numberCardsShown--;
            return false;
        }
    }

    numberOfMoves++;
    document.getElementById('moves').innerHTML = numberOfMoves;

    let value = cards[cardNumber-1];
    let cardImage = "images/" + value + ".png";
    let card = document.getElementById("card"+cardNumber);
    card.src = cardImage;

    if (numberCardsShown == 1) {
        card1 = cardNumber;
    } else if (numberCardsShown == 2) {
        card2 = cardNumber;

        //check winner
        if (cards[card1-1] == cards[card2-1]) {
            console.log("MATCH!!!");
            card1 = null;
            card2 = null;
            numberCardsShown = 0;
        } else {
            console.log("NO MATCH******");
            waitForTimeout = true;
            setTimeout(function(){
                document.getElementById("card"+card1).src = "images/cover.png";
                document.getElementById("card"+card2).src = "images/cover.png";
                card1 = null;
                card2 = null;
                numberCardsShown = 0;
                waitForTimeout = false;
            },2000);
        }

        
    }
}

document.getElementById('card1').addEventListener('click',
    function() {
        flipCard(1);
    }
);
document.getElementById('card2').addEventListener('click',
    function() {
        flipCard(2);
    }
);

document.getElementById('card3').addEventListener('click',
    function() {
        flipCard(3);
    }
);

document.getElementById('card4').addEventListener('click',
    function() {
        flipCard(4);
    }
);

document.getElementById('card5').addEventListener('click',
    function() {
        flipCard(5);
    }
);

document.getElementById('card6').addEventListener('click',
    function() {
        flipCard(6);
    }
);




