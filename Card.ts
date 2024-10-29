import { CardFamily } from "./CardFamily";
import { CardValue } from "./CardValue";

export class Card {
    protected cardValue : CardValue;
    protected family: CardFamily;
    protected field : Card[];


    constructor (cardValue : CardValue, family : CardFamily){
        this.cardValue = cardValue;
        this.family = family;
        this.field = [];
    }

public DisplayCard(): string {
    // Récupère le nom de l enum
    return `${CardValue[this.cardValue]} de ${CardFamily[this.family]}`;
}


    public getCardValue():number{
        // Récupère l'index de l' enum
        return this.cardValue 
    }
 
}
