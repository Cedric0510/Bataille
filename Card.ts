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


    public createAllCards(cardValor :CardValor, family:CardFamily):void{
        // Générer les 52 cartes sans doublons
    };

    

}
