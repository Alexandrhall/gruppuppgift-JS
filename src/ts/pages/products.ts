import { Game } from "../pages/models/Game";


let gameOne:Game = new Game("Monopol", 349, "https://media.storochliten.se/product-images/XL/hasbro-monopol_54185-0.jpg", "Förflytta spelpjäsen runt spelplanen och köp och sälj tomter, bygg hus och hotell.", "family");
let gameTwo:Game = new Game("Schack", 199, "https://schackshoppen.se/images/508-Skaks%C3%A6t%20i%20tr%C3%A6-p.jpg", "Ett logikspel för två. Ett väldigt fint schackbräde, helt i trä.", "family");
let gameThree:Game = new Game("Fia med knuff", 149, "https://media.storochliten.se/product-images/XL/alga-fia-me-knuff-ludo-2.jpg", "Ett ihopfällbart fia med knuff-spel för mellan 2-4 spelare. ", "family");
let gameFour:Game = new Game("Uno", 149, "https://cdn.cdon.com/media-dynamic/images/product/cloud/store/CardGames/000/066/049/018/66049018-119941396-11453-org.jpg?cache=132572556568618987&impolicy=product&imwidth=600", "Skynda dig att bli av med alla dina kort. När du bara har ett kort kvar, ropar du uno!", "family");
let gameFive:Game = new Game("Ticket to ride", 149, "https://www.spelexperten.com/bilder/artiklar/zoom/DOW7202S_1.jpg?m=1637219327", "Ett brädspel där varje spelare ska bygga ett nätverk av järnvägsspår.", "family");
let gameSix:Game = new Game("Med andra ord", 149, "https://www.spelexperten.com/bilder/artiklar/zoom/1-38020-222_1.jpg?m=1637219324", "Beskriv samma sak, med andra ord. Under tidspress!", "family");
let gameSeven:Game = new Game("Rackare", 149, "https://www.spelexperten.com/bilder/artiklar/zoom/30166_1.jpg?m=1637219325", "Rackare är ett löjligt enkelt festspel, endast puckon kan missuppfatta reglerna.", "family");
let gameEight:Game = new Game("Alias", 149, "https://www.spelexperten.com/bilder/artiklar/zoom/2129_1.jpg?m=1637219324", "Ett ordförklaringsspel som spelas i tvåmannalag. Spelet går ut på att förklara ord.", "family");
let gameNine:Game = new Game("Othello", 149, "https://media.storochliten.se/product-images/XL/alga_othello-2.jpg", "Alla förstår spelet på en minut, men det tar en livstid att bemästra finesserna.", "family");
let gameTen:Game = new Game("Kalaha", 149, "https://www.spelexperten.com/bilder/artiklar/zoom/3127_1.jpg?m=1637219325", "Den som får flest kulor i sin poängskål vinner!", "family");
let gameEleven:Game = new Game("Yatzy", 149, "https://www.partyhallen.se/cache/1b/799x799-b_klassiskt-yatzy-spel-1.jpg", "Yatzy är ett tärningsspel med 5 tärningar som uppfanns på 1950-talet. ", "family");
let gameTwelve:Game = new Game("Trivial pursuit", 149, "https://www.spelexperten.com/bilder/artiklar/zoom/5852793_1.jpg?m=1637219325", "Klassiskt spel på klassisk spelplan.", "family");
let gameThirteen:Game = new Game("Rappakalja", 149, "https://www.spelexperten.com/bilder/artiklar/zoom/53255_1.jpg?m=1637219325", "Du ska hitta på trovärdiga förklaringar till vansinniga men ändå genuina svenska ord.", "family");
let gameList:Game[] = [gameOne, gameTwo, gameThree, gameFour, gameFive, gameSix, gameSeven, gameEight, gameNine, gameTen, gameEleven, gameTwelve, gameThirteen];

window.onload = function () {
    console.log(gameList);
    createHTML();
};

function createHTML(){
    for (let i = 0; i < gameList.length; i++) {
        let product = gameList[i];

        //Skapar nya element och ger dom klasser
        let prodDiv:HTMLDivElement = document.createElement("div");
        prodDiv.className = "game-div"
        let prodName:HTMLHeadingElement = document.createElement("h3");
        prodName.className = "game-name";
        let prodImage:HTMLImageElement = document.createElement("img");
        let imageWrapper:HTMLDivElement = document.createElement("div");
        imageWrapper.className = "game-img-wrapper";
        let prodPrice:HTMLSpanElement = document.createElement("span");
        prodPrice.className = "price";
        let buyButton:HTMLButtonElement = document.createElement("button");
        buyButton.className = "buy-button";
        let infoDiv:HTMLDivElement = document.createElement("div");
        infoDiv.className = "buy-div";

        //Sätter olika egenskaper på elementen
        prodName.innerHTML = product.name;
        prodImage.src = product.image;
        //prodImage.src = new URL('../../assets/monopol.jpg', import.meta.url);
        prodImage.alt = product.name;
        //prodDes.innerHTML = product.description;
        buyButton.innerHTML = "Lägg i varukorgen";
        prodPrice.innerHTML = product.price.toString() + ":-";

        //Lägger till elementen till en förälder
        imageWrapper.appendChild(prodImage);
        prodDiv.appendChild(imageWrapper);
        prodDiv.appendChild(prodName);
        prodDiv.appendChild(prodPrice);
        prodDiv.appendChild(buyButton);

        document.getElementById("product-wrapper").appendChild(prodDiv);
        
    }
}