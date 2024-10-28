import { Deck } from "./deck";

export class Player extends Deck{
    private name : string;
    private nbrCards : number;

    constructor (name : string, nbrCards : number){
        super();
        this.name = name;
        this.nbrCards = nbrCards;
    }

    public createTwoPlayers (name : string,nbrCards : number): void{
        //Créer les 2 joueurs
    }
}