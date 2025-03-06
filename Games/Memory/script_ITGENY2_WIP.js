//WIP

let cards = [1,1,2,2,3,3];

let numberCardsShown = 0;
let card1 = null;
let card2 = null;

function initializeGame() {
    console.log("started!");
    //
    //
    //
}

window.onload = initializeGame;

function flipCard(cardNumber) {
    numberCardsShown++;
    console.log(cardNumber);
    let id = "card"+cardNumber;
    let card = document.getElementById(id);
    let cardImg = cards[cardNumber-1] + ".png";
    card.src= "images/" + cardImg;

    if (numberCardsShown == 1) {
        card1 = cardNumber;
    } else if (numberCardsShown == 2) {
        card2 = cardNumber;
        if (cards[card1-1] == cards[card2-1]) {
            alert('match');
            card1 = null;
            card2 = null;
            numberCardsShown = 0;
        } else {
            alert('no match');
            setTimeout(function() {
                document.getElementById("card"+card1).src = "images/cover.png";
                document.getElementById("card"+card2).src = "images/cover.png";   
                card1 = null;
                card2 = null;
                numberCardsShown = 0;
            },1000);
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