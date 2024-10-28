import { Card } from "./card";
import { CardFamily } from "./CardFamily";
import { CardValue } from "./CardValue";
import { Deck } from "./deck";

const card = new Card(CardValue.Roi,CardFamily.Coeur);

const deck = new Deck()
deck.createDeck();

console.log(deck.getDeck())
console.log(card.DisplayOneCard());