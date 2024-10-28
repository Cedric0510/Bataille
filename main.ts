import { Battle } from "./battle";
import { Card } from "./card";
import { CardFamily } from "./CardFamily";
import { CardValue } from "./CardValue";
import { Deck } from "./deck";
import { Player } from "./player";

const card = new Card(CardValue.Roi,CardFamily.Coeur);

const deck = new Deck()
deck.createDeck();
console.log(deck.shuffleDeck())
console.log(deck.getDeck())
// console.log(card.DisplayOneCard());
// const Player1 = new Player("Gérard");
// const Player2= new Player("Michel");

// const battle = new Battle()

// battle.addPlayer(Player1);
// battle.addPlayer(Player2);

// console.log(Player1)

