//  I want to design a game of cards and imagine my 
//  kids are playing against each other.
//  I will used methods and classes base on what I learned from JS
//  and put it all together to function as one.
//	Deal 26 Cards to two Players from a Deck. 
//	Iterate through the turns where each Player plays a Card
//	The Player who played the higher card is awarded a point
//	Ties result in zero points for either Player
//	After all cards have been played, display the score.

class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.deck = [];
    }

    createDeck() {
        const suits = ['♣️', '♦️', '♥️', '♠️'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        for (let i = 0; i < suits.length; i++) {
            for (let k = 0; k < ranks.length; k++) {
                this.deck.push(new Card(suits[i], ranks[k], values[k]));
            }
        }
    }

    shuffleDeck() {
        let card1, card2, temp;
        for (let i = 0; i < 100; i++) {
            card1 = Math.floor((Math.random() * this.deck.length));
            card2 = Math.floor((Math.random() * this.deck.length));
            temp = this.deck[card1];
            this.deck[card1] = this.deck[card2];
            this.deck[card2] = temp;
        }
    }
}

class Gamer {
    constructor(name) {
        this.gamersName = name;
        this.gamersCards = [];
        this.gamersScore = 0; 
    }
}

class TheWarGame {
    constructor() {
        this.gamers = [];

    }

    startgame(firstPlayer, secondPlayer) {
        this.gamers.push(new Gamer(firstPlayer));
        this.gamers.push(new Gamer(secondPlayer));
        let stack = new Deck();
        stack.createDeck();
        stack.shuffleDeck();
        this.gamers[0].gamersCards = stack.deck.slice(0, 26);
        this.gamers[1].gamersCards = stack.deck.slice(26, 52);
    }

    flipCard() {
        let firstCard, secondCard;
        firstCard = this.gamers[0].gamersCards.pop();
        secondCard = this.gamers[1].gamersCards.pop();
        console.log(this.gamers[0].gamersName + ": " + firstCard.suit + " " + firstCard.rank);
        console.log(this.gamers[1].gamersName + ": " + secondCard.suit + " " + secondCard.rank);
        if (firstCard.value > secondCard.value) {
            console.log(this.gamers[0].gamersName + " wins the game!");
            this.gamers[0].gamersScore++;

        } else if (secondCard.value > firstCard.value) {
            console.log(this.gamers[1].gamersName + " wins the game!");
            this.gamers[1].gamersScore++;
        } else {
            console.log("Sorry both gamers lost the game!");
        }
    }

    proclaimVictor() {
        console.log(this.gamers[0].gamersName + ": " + this.gamers[0].gamersScore); 
        console.log(this.gamers[1].gamersName + ": " + this.gamers[1].gamersScore); 

        if (this.gamers[0].gamersScore > this.gamers[1].gamersScore) {
            console.log(this.gamers[0].gamersName + " wins the game!");
        } else if (this.gamers[1].gamersScore > this.gamers[0].gamersScore) {
            console.log(this.gamers[1].gamersName + " wins the game!");
        } else {
            console.log("No Winner For Today's Game!");
        }
    }
}

console.log("--------------A Card Game---------------")
let game = new TheWarGame();

for (let i = 0; i < 26; i++) {
    game.startgame('Rebekah', 'Josiah');
    game.flipCard();
}

console.log(`------------------------
      Final Tally:
------------------------`);
game.proclaimVictor();