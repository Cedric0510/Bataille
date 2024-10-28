import { Battle } from "./battle";
import { Card } from "./card";
import { CardFamily } from "./CardFamily";
import { CardValue } from "./CardValue";
import { Deck } from "./deck";
import { Player } from "./player";

const card = new Card(CardValue.Roi,CardFamily.Coeur);
// console.log(card.DisplayOneCard());


const deck = new Deck()
deck.createDeck();
deck.shuffleDeck();
// console.log(deck.shuffleDeck())
// console.log(deck.getDeck())

const Player1 = new Player("Gérard");
const Player2= new Player("Michel");


const bataille = new Battle()
 bataille.dealCards();
console.log(Player1.getHand());

console.log(bataille.addPlayer(Player1))
console.log(bataille.addPlayer(Player2))

console.log(Player1)

