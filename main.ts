// import { Battle } from "./battle";
// import { Card } from "./card";
// import { CardFamily } from "./CardFamily";
// import { CardValue } from "./CardValue";
// import { Deck } from "./deck";
// import { Player } from "./player";

//  const card = new Card(CardValue.Roi,CardFamily.Coeur);
//  console.log(card.DisplayCard());

// console.log(CardValue.As)
// console.log(CardValue[CardValue.As])

// // const deck = new Deck()
// // deck.createDeck();
// // deck.shuffleDeck();


// const Player1 = new Player("Gérard");
// const Player2 = new Player("Michel");




// const bataille = new Battle()
// bataille.addPlayer(Player1)
// bataille.addPlayer(Player2)
// bataille.dealCards();

// // // console.log(Player1.displayHand())
// // console.log (Player1.getName());
// console.log(Player1.getHand());

// // console.log(bataille.addPlayer(Player1))
// // console.log(bataille.addPlayer(Player2))

// // console.log(Player1)




import { Battle } from './Battle';
import { Player } from './player';

const game = new Battle();
const player1 = new Player("Didier");
const player2 = new Player("Emile");

game.addPlayer(player1);
game.addPlayer(player2);

game.dealCards();
console.log(`${player1.getName()} a ${player1.getHand().length} cartes.`);
console.log(`${player2.getName()} a ${player2.getHand().length} cartes.`);

console.log(player1.displayHand())
console.log(player2.displayHand())
game.playGame();


