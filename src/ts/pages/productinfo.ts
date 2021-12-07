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

    let span: HTMLSpanElement = document.createElement("span");
    let img: HTMLImageElement = document.createElement("img");
    let price: HTMLSpanElement = document.createElement("span");
    let description: HTMLSpanElement = document.createElement("span");

    span.innerHTML = game.name;
    img.src = game.image;
    price.innerHTML = game.price;
    description.innerHTML = game.description;

    prodInfo.appendChild(span);
    prodInfo.appendChild(img);
    prodInfo.appendChild(description);
    prodInfo.appendChild(price);
}
