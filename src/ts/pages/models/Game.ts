export class Game {
    name: string;
    price: number;
    image: string;
    description: string;
    family:boolean;
    card:boolean;
    board:boolean;

    constructor(name:string, price:number, image:string, description:string, family:boolean, card:boolean, board:boolean) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.family = family;
        this.card = card;
        this.board = board;
    }
}