import { Card } from "./card";
import { Deck } from "./deck";

export class Player extends Deck{
    private name : string;
    private hand: Card[];

    constructor (name : string){
        super();
        this.name = name;
        this.hand = [];
    }

    public getName():string{
        return this.name
    }

    public getHand():Card[]{
        return this.hand
    }

    public addCard(card:Card):void{
        this.hand.push(card);
    }

    public playCard():Card{
        return this.hand.shift() as Card;
    }

}