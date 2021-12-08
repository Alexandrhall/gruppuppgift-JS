import { logToHome } from "../main";

window.onload = function () {
    document.getElementById("log").addEventListener("click", logToHome);
    loadProd();
    createHTML();
};

function loadProd() {
    let game = JSON.parse(sessionStorage.getItem("game"));
    console.log(game);
}

function createHTML() {
    let game = JSON.parse(sessionStorage.getItem("game"));
    let prodInfo: HTMLDivElement = document.getElementById(
        "prodInfo"
    ) as HTMLDivElement;

    let name: HTMLSpanElement = document.createElement("h3");
    let img: HTMLImageElement = document.createElement("img");
    let price: HTMLSpanElement = document.createElement("h3");
    let description: HTMLSpanElement = document.createElement("span");
    let namePrice: HTMLDivElement = document.createElement("div");

    name.innerHTML = game.name;
    img.src = game.image;
    price.innerHTML = game.price + ":-";
    description.innerHTML = game.description;

    prodInfo.appendChild(img);
    namePrice.appendChild(name);
    namePrice.appendChild(price);
    prodInfo.appendChild(namePrice);
    prodInfo.appendChild(description);
}
