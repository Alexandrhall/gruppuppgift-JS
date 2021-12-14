import { logToHome } from "../main";
import { Cart } from "../pages/models/Cart";

let cart = new Cart();

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
    
    let cartWrapper: HTMLDivElement = document.getElementById("cartWrapper") as HTMLDivElement;
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

        prodImageWrapper.appendChild(prodImage);

        infoDiv.appendChild(prodName);
        infoDiv.appendChild(prodPrice);

        let trashFont = document.createElement("i");
        trashFont.className = "fa fa-trash-o";
        //trashFont.ariaHidden = "true";

        trashFont.addEventListener("click", () => {
            cart.removeIt(i);
            createHTML();
        });

        let AmountString = JSON.stringify(cart.cartList[i].amount);

        let inputAmount: HTMLInputElement = document.createElement("input");
        inputAmount.id = "valueAmount" + (i + 1);
        inputAmount.type = "number";
        inputAmount.value = AmountString;

        inputAmount.addEventListener("blur", () => {
            cart.addAmount(i);
            createHTML();
        });

        let totaltSpan: HTMLSpanElement = document.createElement(
            "span"
        ) as HTMLSpanElement;

        total += cart.cartList[i].game.price * cart.cartList[i].amount;
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

// export function addToCart(product: Game) {
//     //Kollar om listan är tom
//     if (cartList.length === 0) {
//         //Lägger in en produkt i listan
//         cartList.push(product);

//         //Sätter in listan i sessionStorage
//         sessionStorage.setItem("cartList", JSON.stringify(cartList));
//     } else {
//         // Sätter variabeln cartList till samma innehåll som den i storage
//         cartList = JSON.parse(sessionStorage.getItem("cartList"));

//         // if (cartLis)
//         // for (let i = 0; i < cartList.length; i++) {
//         //     if (cartList[i].name === product.name) {
//         //         cartList[i].amount++;
//         //     } else {
//         //         cartList.push(product);
//         //     }
//         // }

//         // Lägger till produkten i cartList
//         // product.amount++;
//         // cartList.push(product);
//     }

//     sessionStorage.setItem("cartList", JSON.stringify(cartList));

//     console.log(cartList);
// }

// function removeIt(i) {
//     cartList.splice(i, 1);
//     sessionStorage.setItem("cartList", JSON.stringify(cartList));
//     createHTML();
//     console.log(cartList);
// }

// function addAmount(i) {
//     let inputAmount: HTMLInputElement = document.getElementById(
//         "valueAmount" + (i + 1)
//     ) as HTMLInputElement;

//     cartList[i].amount = parseInt(inputAmount.value);

//     sessionStorage.setItem("cartList", JSON.stringify(cartList));
//     createHTML();
// }
