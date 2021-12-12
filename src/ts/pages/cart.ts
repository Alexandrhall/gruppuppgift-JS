import { logToHome } from "../main";
import { Game } from "../pages/models/Game";

let cartList: Game[] = JSON.parse(sessionStorage.getItem("cartList")) || [];
import { Cart } from "../pages/models/Cart";

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

    let total: number = 0;

    for (let i = 0; i < savedCart.length; i++) {
        let itemDiv: HTMLDivElement = document.createElement("div");
        itemDiv.className = "cartItem";
        let prodImage: HTMLImageElement = document.createElement("img");
        prodImage.src = savedCart[i].image;
        let prodImageWrapper: HTMLDivElement = document.createElement("div");
        prodImageWrapper.className = "prodImage-wrapper";
        let infoDiv: HTMLDivElement = document.createElement("div");
        infoDiv.className = "prodInfo";
        let amountBut: HTMLButtonElement = document.createElement("button");
        amountBut.className;
        let prodName: HTMLHeadingElement = document.createElement("h3");
        prodName.innerHTML = savedCart[i].name;
        let prodPrice: HTMLSpanElement = document.createElement("span");
        prodPrice.innerHTML = savedCart[i].price + " :-";

        prodImageWrapper.appendChild(prodImage);

        infoDiv.appendChild(prodName);
        infoDiv.appendChild(prodPrice);

        let trashFont = document.createElement("i");
        trashFont.className = "fa fa-trash-o";
        trashFont.ariaHidden = "true";

        trashFont.addEventListener("click", () => {
            removeIt(i);
        });

        let AmountString = JSON.stringify(savedCart[i].amount);

        let inputAmount: HTMLInputElement = document.createElement("input");
        inputAmount.id = "valueAmount" + (i + 1);
        inputAmount.type = "number";
        inputAmount.value = AmountString;

        inputAmount.addEventListener("blur", () => {
            addAmount(i);
        });

        let totaltSpan: HTMLSpanElement = document.createElement(
            "span"
        ) as HTMLSpanElement;

        total += savedCart[i].price * savedCart[i].amount;
        let totalString: string = JSON.stringify(total);
        totaltSpan.innerHTML = totalString;

        infoDiv.appendChild(trashFont);
        infoDiv.appendChild(inputAmount);
        itemDiv.appendChild(prodImageWrapper);
        itemDiv.appendChild(infoDiv);
        cartWrapper.appendChild(itemDiv);
    }

    let totaltSpan: HTMLSpanElement = document.createElement(
        "span"
    ) as HTMLSpanElement;
    let totalString: string = JSON.stringify(total);
    totaltSpan.innerHTML = "Totalpris: " + totalString + ":-";
    cartWrapper.appendChild(totaltSpan);
}

export function addToCart(product: Game) {
    //Kollar om listan är tom
    if (cartList.length === 0) {
        //Lägger in en produkt i listan
        cartList.push(product);

        //Sätter in listan i sessionStorage
        sessionStorage.setItem("cartList", JSON.stringify(cartList));
    } else {
        // Sätter variabeln cartList till samma innehåll som den i storage
        cartList = JSON.parse(sessionStorage.getItem("cartList"));

        // if (cartLis)
        // for (let i = 0; i < cartList.length; i++) {
        //     if (cartList[i].name === product.name) {
        //         cartList[i].amount++;
        //     } else {
        //         cartList.push(product);
        //     }
        // }

        // Lägger till produkten i cartList
        // product.amount++;
        // cartList.push(product);
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

function addAmount(i) {
    let inputAmount: HTMLInputElement = document.getElementById(
        "valueAmount" + (i + 1)
    ) as HTMLInputElement;

    cartList[i].amount = parseInt(inputAmount.value);

    sessionStorage.setItem("cartList", JSON.stringify(cartList));
    createHTML();
}
