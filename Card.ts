import { CardFamily } from "./CardFamily";
import { CardValue } from "./CardValue";

export class Card {
    protected cardValue : CardValue;
    protected family: CardFamily;


    constructor (cardValue : CardValue, family : CardFamily){
        this.cardValue = cardValue;
        this.family = family;
    }


    public DisplayOneCard():string{
        return `${CardValue[this.cardValue]} de ${CardFamily[this.family]}`
        
    };

 
}
