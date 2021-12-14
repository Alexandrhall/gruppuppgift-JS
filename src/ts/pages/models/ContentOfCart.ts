import { Game } from "./Game";

export class ContentOfCart {
    game: Game[];
    amount: number;

    constructor(game: Game[], amount:number){
        this.game = game;
        this.amount = amount;
    }
}