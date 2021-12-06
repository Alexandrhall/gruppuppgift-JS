export class Game {
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;

    constructor(name:string, price:number, image:string, description:string, category:string) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.category = category;
    }
}