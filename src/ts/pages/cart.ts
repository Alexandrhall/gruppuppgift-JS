import { logToHome } from "../main";
import { Cart } from "../pages/models/Cart";

let cart = new Cart();

window.onload = function () {
    document.getElementById("log").addEventListener("click", logToHome);

    document
        .getElementById("checkoutButton")
        .addEventListener("click", goToCheckout);

    createHTML();
    cart.cartAmountCount();
};

function goToCheckout() {
    location.href = "http://localhost:1234/pages/checkout.html";
}

function createHTML() {
    let cartWrapper: HTMLDivElement = document.getElementById(
        "cartWrapper"
    ) as HTMLDivElement;
    cartWrapper.innerHTML = "";

    let total: number = 0;

    for (let i = 0; i < cart.cartList.length; i++) {
        let itemDiv: HTMLDivElement = document.createElement("div");
        itemDiv.className = "cartItem";
        let prodImage: HTMLImageElement = document.createElement("img");
        prodImage.src = cart.cartList[i].game.image;
        let prodImageWrapper: HTMLDivElement = document.createElement("div");
        prodImageWrapper.className = "prodImage-wrapper";
        let infoDiv: HTMLDivElement = document.createElement("div");
        infoDiv.className = "prodInfo";
        let amountBut: HTMLButtonElement = document.createElement("button");
        amountBut.className;
        let prodName: HTMLHeadingElement = document.createElement("h3");
        prodName.innerHTML = cart.cartList[i].game.name;
        let prodPrice: HTMLSpanElement = document.createElement("span");
        prodPrice.innerHTML = cart.cartList[i].game.price + " :-";
        let textDiv:HTMLDivElement = document.createElement("div");
        textDiv.className = "textDiv";
        let clickableDiv:HTMLDivElement = document.createElement("div");
        clickableDiv.className ="clickDiv";

        prodImageWrapper.appendChild(prodImage);

        let trashFont = document.createElement("i");
        trashFont.className = "fa fa-trash-o";

        trashFont.addEventListener("click", () => {
            cart.removeIt(i);
            createHTML();
        });

        let AmountString = JSON.stringify(cart.cartList[i].amount);

        let inputAmount: HTMLInputElement = document.createElement("input");
        inputAmount.id = "valueAmount" + (i + 1);
        inputAmount.type = "number";
        inputAmount.min = "1";
        inputAmount.value = AmountString;

        inputAmount.addEventListener("blur", () => {
            cart.addAmount(i);
            createHTML();
            cart.cartAmountCount();
        });

        let totaltSpan: HTMLSpanElement = document.createElement(
            "span"
        ) as HTMLSpanElement;

        total += cart.cartList[i].game.price * cart.cartList[i].amount;
        let totalString: string = JSON.stringify(total);
        totaltSpan.innerHTML = totalString;

        textDiv.appendChild(prodName);
        textDiv.appendChild(prodPrice);
        clickableDiv.appendChild(inputAmount);
        clickableDiv.appendChild(trashFont);

        infoDiv.appendChild(textDiv);
        infoDiv.appendChild(clickableDiv);

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
