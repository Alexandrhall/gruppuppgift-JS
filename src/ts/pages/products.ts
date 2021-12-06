import { Game } from "../pages/models/Game";

let gameOne:Game = new Game("Monopol", 349, "img", "Kasta dig ut i den spännande fastighetsbranschen och gör snabba klipp. Förflytta spelpjäsen runt spelplanen och köp och sälj tomter, bygg hus och hotell. Det handlar om stora pengar och om att snabbt bygga upp en förmögenhet tills du äger allt!", "family");
let gameTwo:Game = new Game("Schack", 199, "img", "Ett logikspel för två. Ett väldigt fint schackbräde, helt i trä. Al, tysklönn samt med inlägg av betsat poppelträ som liknar sapele.", "family");
let gameThree:Game = new Game("Fia med knuff", 149, "img", "Ett ihopfällbart fia med knuff-spel för mellan 2-4 spelare. ", "family");
let gameFour:Game = new Game("Uno", 149, "img", "Skynda dig att bli av med alla dina kort. Använd händelsekorten mot dina motspelare. När du bara har ett kort kvar, måste du ropa uno!", "family");
let gameFive:Game = new Game("Ticket to ride", 149, "img", "Ticket to Ride: Europe är ett brädspel där varje spelare ska bygga ett nätverk av järnvägsspår.", "family");
let gameSix:Game = new Game("Med andra ord", 149, "img", "Beskriv samma sak, med andra ord. Under tidspress!", "family");
let gameSeven:Game = new Game("Rackare", 149, "img", "Rackare är ett löjligt enkelt festspel, till den grad att endast puckon kan missuppfatta reglerna.", "family");
let gameEight:Game = new Game("Alias", 149, "img", "Ett ordförklaringsspel för vuxna som spelas i tvåmannalag. Spelet går ut på att förklara ord.", "family");
let gameNine:Game = new Game("Othello", 149, "img", "Alla förstår spelet på en minut, men det tar en livstid att bemästra de taktiska finesserna.", "family");
let gameTen:Game = new Game("Kalaha", 149, "img", "Den som får flest kulor i sin poängskål vinner!", "family");
let gameEleven:Game = new Game("Yatzy", 149, "img", "Yatzy är ett tärningsspel med 5 tärningar som uppfanns på 1950-talet. ", "family");
let gameTwelve:Game = new Game("Trivial pursuit", 149, "img", "Klassiskt spel på klassisk spelplan.", "family");
let gameThirteen:Game = new Game("Rappakalja", 149, "img", "Originalversionen av ett av världens populäraste spel! Du ska hitta på fantastiska men samtidigt trovärdiga förklaringar till vansinniga men ändå genuina svenska ord.", "family");
let gameList:Game[] = [gameOne, gameTwo, gameThree, gameFour, gameFive, gameSix, gameSeven, gameEight, gameNine, gameTen, gameEleven, gameTwelve, gameThirteen];

window.onload = function () {
    console.log(gameList);
    createHTML();
};

function createHTML(){
    for (let i = 0; i < gameList.length; i++) {
        let product = gameList[i];

        let prodDiv:HTMLDivElement = document.createElement("div");
        prodDiv.className = "game-div"
        let prodName:HTMLSpanElement = document.createElement("span");
        prodName.className="game-name";

        let prodImage:HTMLImageElement = document.createElement("img");
        let imageWrapper:HTMLDivElement = document.createElement("div");
        imageWrapper.className = "game-img-wrapper";

        let prodDes:HTMLParagraphElement = document.createElement("p");
        prodDes.className = "game-description";

        prodName.innerHTML = product.name;
        prodImage.src = product.image;
        prodDes.innerHTML = product.description;

        imageWrapper.appendChild(prodImage);
        prodDiv.appendChild(prodName);
        prodDiv.appendChild(imageWrapper);
        prodDiv.appendChild(prodDes);
        
        document.getElementById("product-wrapper").appendChild(prodDiv);
        
    }
}