import { logToHome } from "../main";
import { Game } from "../pages/models/Game";

let cartList: Game[] = JSON.parse(sessionStorage.getItem("cartList")) || [];

window.onload = function () {
    document.getElementById("log").addEventListener("click", logToHome);

    document
        .getElementById("checkoutButton")
        .addEventListener("click", goToCheckout);

    createHTML();
};

function goToCheckout() {
    location.href = "http://localhost:1234/pages/checkout.html";
}

function createHTML() {
    // let savedCart: Game[] = JSON.parse(sessionStorage.getItem("cartList"));
    let cartWrapper: HTMLDivElement = document.getElementById(
        "cartWrapper"
    ) as HTMLDivElement;

    cartWrapper.innerHTML = "";

    let savedCart: Game[] = cartList;

    for (let i = 0; i < savedCart.length; i++) {
        let itemDiv: HTMLDivElement = document.createElement("div");
        itemDiv.className = "cartItem";
        let prodImage: HTMLImageElement = document.createElement("img");
        prodImage.src = savedCart[i].image;
        let prodImageWrapper: HTMLDivElement = document.createElement("div");
        prodImageWrapper.className = "prodImage-wrapper";
        let infoDiv: HTMLDivElement = document.createElement("div");
        infoDiv.className = "prodInfo";
        let prodName: HTMLHeadingElement = document.createElement("h3");
        prodName.innerHTML = savedCart[i].name;
        let prodPrice: HTMLSpanElement = document.createElement("span");
        prodPrice.innerHTML = savedCart[i].price + " :-";

        prodImageWrapper.appendChild(prodImage);

        infoDiv.appendChild(prodName);
        infoDiv.appendChild(prodPrice);

        let span = document.createElement("span");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);

        span.addEventListener("click", () => {
            removeIt(i);
        });

        infoDiv.appendChild(span);
        itemDiv.appendChild(prodImageWrapper);
        itemDiv.appendChild(infoDiv);
        // document.getElementById("cartWrapper").appendChild(itemDiv);
        cartWrapper.appendChild(itemDiv);
    }
}

export function addToCart(product: Game) {
    // if(cartList.length === 0){
    //     console.log(product);
    // }

    //Kollar om listan är tom
    if (cartList.length === 0) {
        //Lägger in en produkt i listan
        cartList.push(product);

        //Sätter in listan i sessionStorage
        sessionStorage.setItem("cartList", JSON.stringify(cartList));
    } else {
        // Sätter variabeln cartList till samma innehåll som den i storage
        cartList = JSON.parse(sessionStorage.getItem("cartList"));

        // Lägger till produkten i cartList
        cartList.push(product);
    }

    sessionStorage.setItem("cartList", JSON.stringify(cartList));

    console.log(cartList);
}

function removeIt(i) {
    cartList.splice(i, 1);
    sessionStorage.setItem("cartList", JSON.stringify(cartList));
    createHTML();
    console.log(cartList);
}

// function addToCart(product:Game){

//     if (cartList[0] == null){
//         cartList.push(product);
//     }else{
//         for (let i = 0; i < savedCart.length; i++) {
//             cartList.push(savedCart[i]);
//         }
//     }
//     sessionStorage.setItem("cartList", JSON.stringify(cartList));
//     savedCart = JSON.parse(sessionStorage.getItem("cartList"));

//     console.log("Den går in här");
// }

// function clickOnProd(e) {
//     //sessionStorage.setItem("game", JSON.stringify(e));
//     //location.href = "http://localhost:1234/pages/productinfo.html";
// }
