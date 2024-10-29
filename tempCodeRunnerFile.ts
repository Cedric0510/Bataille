
import { Battle } from './Battle';
import { Player } from './player';

const game = new Battle();
const player1 = new Player("Joueur 1");
const player2 = new Player("Joueur 2");

game.addPlayer(player1);
game.addPlayer(player2);

game.dealCards();
console.log(`${player1.getName()} a ${player1.getHand().length} cartes.`);
console.log(`${player2.getName()} a ${player2.getHand().length} cartes.`);

console.log(player1.displayHand())
console.log(player2.displayHand())
game.playGame();