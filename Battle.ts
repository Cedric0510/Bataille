import { Card } from './card';
import { Deck } from './deck';
import { Player } from './player';

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
        for (let i = 0; i < 26; i++) {
            this.players[0].addCard(this.deck.getDeck().pop() as Card);
            this.players[1].addCard(this.deck.getDeck().pop() as Card);
        }
    }
    
    public playGame(): void {
        let field: Card[] = [];
        let turnCount = 0;
        let battleCount = 0;
    
        while (this.players[0].getHand().length > 0 && this.players[1].getHand().length > 0) {
            const card1 = this.players[0].playCard();
            const card2 = this.players[1].playCard();
    
            const card1Name = card1.DisplayCard();
            const card2Name = card2.DisplayCard();
            console.log(`${this.players[0].getName()} a joué ${card1Name}`);
            console.log(`${this.players[1].getName()} a joué ${card2Name}`);
    
            const value1 = card1.getCardValue();
            const value2 = card2.getCardValue();
    
            if (value1 > value2) {
                console.log(`${this.players[0].getName()} remporte cette manche.`);
                this.players[0].addCard(card1);
                this.players[0].addCard(card2);
                field.forEach(card => this.players[0].addCard(card));
                field = [];
            } else if (value1 < value2) {
                console.log(`${this.players[1].getName()} remporte cette manche.`);
                this.players[1].addCard(card1);
                this.players[1].addCard(card2);
                field.forEach(card => this.players[1].addCard(card));
                field = [];
            } else {
                console.log("Égalité ! Les cartes sont mises de côté pour la prochaine manche.");
                field.push(this.players[0].playCard(),card1, this.players[1].playCard(),card2);
                battleCount++;
            }
    
            console.log(`Nombre de cartes - ${this.players[0].getName()}: ${this.players[0].getHand().length}, ${this.players[1].getName()}: ${this.players[1].getHand().length}`);
            turnCount++;
    
            if (turnCount > 10000) {
                console.log("Le jeu est interrompu après 1000 tours pour éviter une boucle infinie.");
                break;
            }
        }
    
        const winner = this.players[0].getHand().length > 0 ? this.players[0] : this.players[1];
        console.log(`Le gagnant est ${winner.getName()} avec ${winner.getHand().length} cartes restantes !`);
        console.log(`Nombre total de batailles : ${battleCount}`);
    }
    
}      