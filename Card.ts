import { CardFamily } from "./CardFamily";
import { CardValue } from "./CardValue";
import { Deck} from "./deck";

export class Card extends Deck{
    protected cardValue : CardValue;
    protected family: CardFamily;


    constructor (cardValue : CardValue, family : CardFamily){
        super();
        this.cardValue = cardValue;
        this.family = family;
    }


    public DisplayOneCard():string{
        return `${CardValue[this.cardValue]} de ${CardFamily[this.family]}`
        
    };

 
}
