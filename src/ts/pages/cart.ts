import { logToHome } from "../main";
import { Game } from "../pages/models/Game";


export let cartList:Game[] = [];

window.onload = function () {
    document.getElementById("log").addEventListener("click", logToHome);

    document.getElementById("checkoutButton").addEventListener("click", goToCheckout);

    createHTML();
};

function goToCheckout(){
    location.href = "http://localhost:1234/pages/checkout.html";
}

function createHTML(){
   
    let savedCart:Game[] = JSON.parse(sessionStorage.getItem("cartList"));

    for (let i = 0; i < savedCart.length; i++) {
        let itemDiv:HTMLDivElement = document.createElement("div");
        itemDiv.className = "cartItem";
        let prodImage:HTMLImageElement = document.createElement("img");
        prodImage.src = savedCart[i].image;
        let prodImageWrapper:HTMLDivElement = document.createElement("div");
        prodImageWrapper.className = "prodImage-wrapper";
        let infoDiv:HTMLDivElement = document.createElement("div");
        infoDiv.className = "prodInfo";
        let prodName:HTMLHeadingElement = document.createElement("h3");
        prodName.innerHTML = savedCart[i].name;
        let prodPrice:HTMLSpanElement = document.createElement("span");
        prodPrice.innerHTML = savedCart[i].price.toString() + " :-";

        prodImageWrapper.appendChild(prodImage);
        
        infoDiv.appendChild(prodName);
        infoDiv.appendChild(prodPrice);
        itemDiv.appendChild(prodImageWrapper);
        itemDiv.appendChild(infoDiv);
        document.getElementById("cart-wrapper").appendChild(itemDiv);
    }
    
}