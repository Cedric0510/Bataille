import { CardFamily } from "./CardFamily";
import { CardValor } from "./CardValor";
import { Deck} from "./deck";

export class Card extends Deck{
    private cardValor : CardValor;
    private family: CardFamily;


    constructor (cardValor : CardValor, family : CardFamily){
        super();
        this.cardValor = cardValor;
        this.family = family;
    }


    public createOneCard(cardValor :CardValor, family:CardFamily):string{

        return `${this.cardValor} ${this.family}`
    };


}
