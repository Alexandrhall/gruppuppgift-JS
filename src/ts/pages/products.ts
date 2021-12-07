import { Game } from "../pages/models/Game";

import monopol from "../../assets/monopol.jpg";
import schack from "../../assets/schack.jpeg";
import fia from "../../assets/fia.jpeg";
import uno from "../../assets/uno.jpeg";
import ticket from "../../assets/ticket-to-ride.jpeg";
import ord from "../../assets/andraord.jpeg";
import rackare from "../../assets/rackare.jpeg";
import alias from "../../assets/alias.jpeg";
import othello from "../../assets/othello.jpg";
import kalaha from "../../assets/kalaha.jpeg";
import yatzy from "../../assets/yatzy.jpeg";
import trivial from "../../assets/trivial.jpeg";
import rappakalja from "../../assets/rappakalja.jpeg";

let gameOne:Game = new Game("Monopol", 349, monopol, "Förflytta spelpjäsen runt spelplanen och köp och sälj tomter, bygg hus och hotell. Det handlar om att snabbt bygga upp en förmögenhet tills du äger allt!", "family");
let gameTwo:Game = new Game("Schack", 199, schack, "Ett logikspel för två. Ett väldigt fint schackbräde, helt i trä. Al, tysklönn samt med inlägg av betsat poppelträ som liknar sapele.", "family");
let gameThree:Game = new Game("Fia med knuff", 149, fia, "Ett ihopfällbart fia med knuff-spel för mellan 2-4 spelare. ", "family");
let gameFour:Game = new Game("Uno", 149, uno, "Skynda dig att bli av med alla dina kort. Använd händelsekorten mot dina motspelare. När du bara har ett kort kvar, måste du ropa uno!", "family");
let gameFive:Game = new Game("Ticket to ride", 149, ticket, "Ticket to Ride: Europe är ett brädspel där varje spelare ska bygga ett nätverk av järnvägsspår.", "family");
let gameSix:Game = new Game("Med andra ord", 149, ord, "Beskriv samma sak, med andra ord. Under tidspress!", "family");
let gameSeven:Game = new Game("Rackare", 149, rackare, "Rackare är ett löjligt enkelt festspel, till den grad att endast puckon kan missuppfatta reglerna.", "family");
let gameEight:Game = new Game("Alias", 149, alias, "Ett ordförklaringsspel för vuxna som spelas i tvåmannalag. Spelet går ut på att förklara ord.", "family");
let gameNine:Game = new Game("Othello", 149, othello, "Alla förstår spelet på en minut, men det tar en livstid att bemästra de taktiska finesserna.", "family");
let gameTen:Game = new Game("Kalaha", 149, kalaha, "Den som får flest kulor i sin poängskål vinner!", "family");
let gameEleven:Game = new Game("Yatzy", 149, yatzy, "Yatzy är ett tärningsspel med 5 tärningar som uppfanns på 1950-talet. ", "family");
let gameTwelve:Game = new Game("Trivial pursuit", 149, trivial, "Klassiskt spel på klassisk spelplan.", "family");
let gameThirteen:Game = new Game("Rappakalja", 149, rappakalja, "Originalversionen av ett av världens populäraste spel! Du ska hitta på fantastiska men samtidigt trovärdiga förklaringar till vansinniga men ändå genuina svenska ord.", "family");
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
        let prodName:HTMLSpanElement = document.createElement("span");
        prodName.className = "game-name";
        let buyButton:HTMLButtonElement = document.createElement("button");
        buyButton.className = "buy-button";
        let prodImage:HTMLImageElement = document.createElement("img");
        let imageWrapper:HTMLDivElement = document.createElement("div");
        imageWrapper.className = "game-img-wrapper";
        let prodDes:HTMLParagraphElement = document.createElement("p");
        prodDes.className = "game-description";

        //Sätter olika egenskaper på elementen
        prodName.innerHTML = product.name;
        prodImage.src = product.image;
        //prodImage.src = new URL('../../assets/monopol.jpg', import.meta.url);
        prodImage.alt = product.name;
        prodDes.innerHTML = product.description;

        //Lägger till elementen till en förälder
        imageWrapper.appendChild(prodImage);
        prodDiv.appendChild(prodName);
        prodDiv.appendChild(imageWrapper);
        prodDiv.appendChild(prodDes);

        document.getElementById("product-wrapper").appendChild(prodDiv);
        
    }
}