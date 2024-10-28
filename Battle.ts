import { Card } from './card';
import { Deck } from './deck';
import { Player } from './player';
import { CardValue } from './CardValue';
import { CardFamily } from './CardFamily';

export class Battle {
    private players: Player[];
    private deck: Deck;
    constructor() {
        this.players = [];
        this.deck = new Deck();
        this.deck.createDeck();
        this.deck.shuffleDeck();
    }
    public addPlayer(player: Player): void {
        this.players.push(player);
    }
    public dealCards(): void {
        this.players.forEach((player) => {
            player.addCard(this.deck.getDeck().pop() as Card);
        });
    }
    public playGame(): void {
        this.players.forEach((player) => {
            console.log(`${player.getName()} a joué ${player.playCard().DisplayOneCard()}`);
        });
    }
}