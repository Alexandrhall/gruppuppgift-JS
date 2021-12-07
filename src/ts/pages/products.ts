import { Game } from "../pages/models/Game";

import monopol from "../../assets/monopoly.jpg";
import schack from "../../assets/schack.jpeg";
import fia from "../../assets/fia.jpeg";
import uno from "../../assets/uno.jpeg";
import ticket from "../../assets/ticket.jpg";
import ord from "../../assets/andraord.jpeg";
import rackare from "../../assets/rackare.jpg";
import alias from "../../assets/alias.jpeg";
import othello from "../../assets/othello.jpg";
import kalaha from "../../assets/kalaha.jpg";
import yatzy from "../../assets/yatzy.jpeg";
import trivial from "../../assets/trivial.jpeg";
import rappakalja from "../../assets/rappakalja.jpeg";

let gameOne:Game = new Game("Monopol", 349, monopol, "Förflytta spelpjäsen runt spelplanen och köp och sälj tomter, bygg hus och hotell.", "family");
let gameTwo:Game = new Game("Schack", 199, schack, "Ett logikspel för två. Ett väldigt fint schackbräde, helt i trä.", "family");
let gameThree:Game = new Game("Fia med knuff", 149, fia, "Ett ihopfällbart fia med knuff-spel för mellan 2-4 spelare. ", "family");
let gameFour:Game = new Game("Uno", 149, uno, "Skynda dig att bli av med alla dina kort. När du bara har ett kort kvar, ropar du uno!", "family");
let gameFive:Game = new Game("Ticket to ride", 149, ticket, "Ett brädspel där varje spelare ska bygga ett nätverk av järnvägsspår.", "family");
let gameSix:Game = new Game("Med andra ord", 149, ord, "Beskriv samma sak, med andra ord. Under tidspress!", "family");
let gameSeven:Game = new Game("Rackare", 149, rackare, "Rackare är ett löjligt enkelt festspel, endast puckon kan missuppfatta reglerna.", "family");
let gameEight:Game = new Game("Alias", 149, alias, "Ett ordförklaringsspel som spelas i tvåmannalag. Spelet går ut på att förklara ord.", "family");
let gameNine:Game = new Game("Othello", 149, othello, "Alla förstår spelet på en minut, men det tar en livstid att bemästra finesserna.", "family");
let gameTen:Game = new Game("Kalaha", 149, kalaha, "Den som får flest kulor i sin poängskål vinner!", "family");
let gameEleven:Game = new Game("Yatzy", 149, yatzy, "Yatzy är ett tärningsspel med 5 tärningar som uppfanns på 1950-talet. ", "family");
let gameTwelve:Game = new Game("Trivial pursuit", 149, trivial, "Klassiskt spel på klassisk spelplan.", "family");
let gameThirteen:Game = new Game("Rappakalja", 149, rappakalja, "Du ska hitta på trovärdiga förklaringar till vansinniga men ändå genuina svenska ord.", "family");
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