import { Game } from "../pages/models/Game";
import { logToHome } from "../main";
import { addToCart } from "../pages/cart";


let gameOne: Game = new Game(
    "Monopol",
    249,
    "https://media.storochliten.se/product-images/XL/hasbro-monopol_54185-0.jpg",
    "Kasta dig ut i den spännande fastighetsbranschen och gör snabba klipp. Förflytta spelpjäsen runt spelplanen och köp och sälj tomter, bygg hus och hotell. Det handlar om stora pengar och om att snabbt bygga upp en förmögenhet tills du äger allt!",
    "family"
);
let gameTwo: Game = new Game(
    "Schack",
    99,
    "https://schackshoppen.se/images/508-Skaks%C3%A6t%20i%20tr%C3%A6-p.jpg",
    "Ett logikspel för två. Ett väldigt fint schackbräde, helt i trä. Al, tysklönn samt med inlägg av betsat poppelträ som liknar sapele.",
    "board"
);
let gameThree: Game = new Game(
    "Fia med knuff",
    79,
    "https://cdn.cdon.com/media-dynamic/images/product/cloud/store/SpecialDecorations/000/075/228/067/75228067-135496338-11453-org.jpg?cache=132661784599800444&impolicy=product&imwidth=600",
    "Ett ihopfällbart fia med knuff-spel för mellan 2-4 spelare. ",
    "family"
);
let gameFour: Game = new Game(
    "Uno",
    79,
    "https://cdn.cdon.com/media-dynamic/images/product/cloud/store/CardGames/000/066/049/018/66049018-119941396-11453-org.jpg?cache=132572556568618987&impolicy=product&imwidth=600",
    "Skynda dig att bli av med alla dina kort. Använd händelsekorten mot dina motspelare. När du bara har ett kort kvar, måste du ropa uno!",
    "card"
);
let gameFive: Game = new Game(
    "Ticket to ride",
    349,
    "https://www.spelexperten.com/bilder/artiklar/zoom/DOW7202S_1.jpg?m=1637219327",
    "Ticket to Ride: Europe är ett brädspel där varje spelare ska bygga ett nätverk av järnvägsspår.",
    "board"
);
let gameSix: Game = new Game(
    "Med andra ord",
    249,
    "https://www.spelexperten.com/bilder/artiklar/zoom/1-38020-222_1.jpg?m=1637219324",
    "Beskriv samma sak, med andra ord. Under tidspress!",
    "family"
);
let gameSeven: Game = new Game(
    "Rackare",
    199,
    "https://www.spelexperten.com/bilder/artiklar/zoom/30166_1.jpg?m=1637219325",
    "Rackare är ett löjligt enkelt festspel, till den grad att endast puckon kan missuppfatta reglerna.",
    "card"
);
let gameEight: Game = new Game(
    "Alias",
    249,
    "https://www.spelexperten.com/bilder/artiklar/zoom/2129_1.jpg?m=1637219324",
    "Ett ordförklaringsspel för vuxna som spelas i tvåmannalag. Spelet går ut på att förklara ord.",
    "family"
);
let gameNine: Game = new Game(
    "Othello",
    149,
    "https://img.fruugo.com/product/2/50/166667502_max.jpg",
    "Alla förstår spelet på en minut, men det tar en livstid att bemästra de taktiska finesserna.",
    "board"
);
let gameTen: Game = new Game(
    "Kalaha",
    199,
    "https://www.spelexperten.com/bilder/artiklar/zoom/3127_1.jpg?m=1637219325",
    "Den som får flest kulor i sin poängskål vinner!",
    "board"
);
let gameEleven: Game = new Game(
    "Yatzy",
    49,
    "https://www.partyhallen.se/cache/1b/799x799-b_klassiskt-yatzy-spel-1.jpg",
    "Yatzy är ett tärningsspel med 5 tärningar som uppfanns på 1950-talet. ",
    "family"
);
let gameTwelve: Game = new Game(
    "Trivial pursuit",
    299,
    "https://media.babyland.se/product-images/XL/hasbro-trivial-pursuit-classic-edition_54191-2.jpg",
    "Klassiskt spel på klassisk spelplan.",
    "family"
);
let gameThirteen: Game = new Game(
    "Rappakalja",
    99,
    "https://www.spelexperten.com/bilder/artiklar/zoom/53255_1.jpg?m=1637219325",
    "Originalversionen av ett av världens populäraste spel! Du ska hitta på fantastiska men samtidigt trovärdiga förklaringar till vansinniga men ändå genuina svenska ord.",
    "family"
);
let gameList: Game[] = [
    gameOne,
    gameTwo,
    gameThree,
    gameFour,
    gameFive,
    gameSix,
    gameSeven,
    gameEight,
    gameNine,
    gameTen,
    gameEleven,
    gameTwelve,
    gameThirteen,
];

//Variabel som håller koll på vilken kategori som är vald
let currentDisplay:string = "all";

window.onload = function () {
    document.getElementById("log").addEventListener("click", logToHome);
    
    //Eventlisteners kategorier
    document.getElementById("catAll").addEventListener("click", showAllCategories);
    document.getElementById("catBoard").addEventListener("click", () => {
        chooseCategory("board");
    });
    document.getElementById("catCard").addEventListener("click", () => {
        chooseCategory("card");
    });
    document.getElementById("catFamily").addEventListener("click", () => {
        chooseCategory("family");
    });

    //Eventlisteners sortering
    document.getElementById("sortExp").addEventListener("click", sortExp);
    document.getElementById("sortCheap").addEventListener("click", sortCheap);

    //Dropdown sortering
    document.getElementById("dropdownButton").addEventListener("click", dropDown);    

    //Standard display
    showAllCategories();
};

function dropDown(){
    document.getElementById("sortDropdown").classList.toggle("show");
}

function showAllCategories() {
    document.getElementById("product-wrapper").innerHTML="";
    for (let i = 0; i < gameList.length; i++) {
        createHTML(i);
    }
    currentDisplay = "all";
}

function chooseCategory(e:string){
    document.getElementById("product-wrapper").innerHTML="";
    for (let i = 0; i < gameList.length; i++) {
        if(gameList[i].category == e){
            createHTML(i);
        }
    }
    //Sätter variabeln till den valda kategorin
    currentDisplay = e;
}

function createHTML(i:number){
    let product = gameList[i];

    //Skapar nya element och ger dom klasser
    let prodDiv: HTMLDivElement = document.createElement("div");
    prodDiv.className = "game-div";
    let prodName: HTMLHeadingElement = document.createElement("h3");
    prodName.className = "game-name";
    let prodImage: HTMLImageElement = document.createElement("img");
    let imageWrapper: HTMLDivElement = document.createElement("div");
    imageWrapper.className = "game-img-wrapper";
    let prodPrice: HTMLSpanElement = document.createElement("span");
    prodPrice.className = "price";
    let buyButton: HTMLButtonElement = document.createElement("button");
    buyButton.className = "buy-button";
    let infoDiv: HTMLDivElement = document.createElement("div");
    infoDiv.className = "buy-div";

    //Sätter olika egenskaper på elementen
    prodName.innerHTML = product.name;
    prodImage.src = product.image;
    prodImage.alt = product.name;
    buyButton.innerHTML = "Lägg i varukorgen";
    prodPrice.innerHTML = product.price.toString() + ":-";

    // prodDiv.addEventListener("click", () => {
    //     clickOnProd(gameList[i]);
    // });

    buyButton.addEventListener("click", () => {
        addToCart(product);
    });

    //Lägger till elementen till en förälder
    imageWrapper.appendChild(prodImage);
    prodDiv.appendChild(imageWrapper);
    prodDiv.appendChild(prodName);
    prodDiv.appendChild(prodPrice);
    prodDiv.appendChild(buyButton);

    document.getElementById("product-wrapper").appendChild(prodDiv);
}

// Funktioner som oreterar på pris
function sortExp(){
    gameList.sort(function(a, b){return b.price - a.price});
    if (currentDisplay == "all"){
        showAllCategories();
    }else{
        chooseCategory(currentDisplay);
    }
    document.getElementById("sortExp").classList.add("chosenSort");
    document.getElementById("sortCheap").classList.remove("chosenSort");
}

function sortCheap(){
    gameList.sort(function(b, a){return b.price - a.price});
    if (currentDisplay == "all"){
        showAllCategories();
    }else{
        chooseCategory(currentDisplay);
    }
    document.getElementById("sortCheap").classList.add("chosenSort");
    document.getElementById("sortExp").classList.remove("chosenSort");
}

// function clickOnProd(e) {
//     sessionStorage.setItem("game", JSON.stringify(e));
//     location.href = "http://localhost:1234/pages/productinfo.html";
// }