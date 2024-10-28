import { Card } from "./card"
import { CardFamily } from "./CardFamily";
import { CardValue } from "./CardValue";
export class Deck {

    private decks: Card[];

    constructor() {
        this.decks = []
    }


    public createDeck(): void {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 13; j++) {
                this.decks.push(new Card(CardValue[j as unknown as keyof typeof CardValue
                ], CardFamily[i as unknown as keyof typeof CardFamily]
                ));
            }
        }
    }

    public getDeck(){
        return this.decks;
    }


    // public shuffleCards(card: Card): void {
    //     // Mélangé les 52 cartes créé et distribuer.
    // }
}