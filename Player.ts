import { Card } from "./card";

export class Player{
    private name : string;
    protected hand: Card[];

    constructor (name : string){
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

    public displayHand(){
        return this.hand.map(card => card.DisplayCard()).join(",")
    }

}