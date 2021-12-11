export class Game {
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
    amount: number;

    constructor(
        name: string,
        price: number,
        image: string,
        description: string,
        category: string
    ) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.category = category;
        this.amount = 0;
    }
}
