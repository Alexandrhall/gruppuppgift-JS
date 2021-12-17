import { ContentOfCart } from "./ContentOfCart";

export class Cart {
    cartList: ContentOfCart[];

    constructor() {
        this.cartList = JSON.parse(sessionStorage.getItem("cartList")) || [];
    }

    addToCart(product: ContentOfCart) {
        //Skapar variabel
        let double = false;

        //Kollar om listan innehåller något
        if (this.cartList.length != 0) {
            // Sätter variabeln cartList till samma innehåll som den i storage
            this.cartList = JSON.parse(sessionStorage.getItem("cartList"));
        }

        //Kollar om produkten redan finns i listan
        for (let i = 0; i < this.cartList.length; i++) {
            if (this.cartList[i].game.name == product.game.name) {
                this.cartList[i].amount =
                    product.amount + this.cartList[i].amount++;
                double = true;
            }
        }

        if (double === false) {
            this.cartList.push(product);
        }

        //Sätter uppdaterad lista i storage
        sessionStorage.setItem("cartList", JSON.stringify(this.cartList));
    }

    removeIt(i: number) {
        this.cartList.splice(i, 1);
        sessionStorage.setItem("cartList", JSON.stringify(this.cartList));
        this.cartAmountUpdate();
    }

    addAmount(i: number) {
        let inputAmount: HTMLInputElement = document.getElementById(
            "valueAmount" + (i + 1)
        ) as HTMLInputElement;

        this.cartList[i].amount = parseInt(inputAmount.value);

        sessionStorage.setItem("cartList", JSON.stringify(this.cartList));
    }

    cartAmountCount() {
        let cart = new Cart();

        let cartAmounter: HTMLElement = document.createElement("i");
        let cartAmountSpan: HTMLSpanElement = document.createElement("span");

        cartAmounter.className = "cartAmounter fa fa-circle";
        cartAmounter.id = "cartA";
        cartAmountSpan.id = "cartSpan";

        let totaltSum: number = 0;
        for (let u = 0; u < cart.cartList.length; u++) {
            totaltSum += cart.cartList[u].amount;
        }

        if (totaltSum > 9) {
            cartAmountSpan.className = "big";
        } else {
            cartAmountSpan.className = "";
        }

        cartAmountSpan.innerHTML = JSON.stringify(totaltSum);

        let shopCart: HTMLElement = document.getElementById("prodCart");

        cartAmounter.appendChild(cartAmountSpan);
        shopCart.appendChild(cartAmounter);
    }

    cartAmountUpdate() {
        let cartAmountSpan: HTMLSpanElement = document.getElementById(
            "cartSpan"
        ) as HTMLSpanElement;

        let totaltSum: number = 0;

        for (let j = 0; j < this.cartList.length; j++) {
            totaltSum += this.cartList[j].amount;
        }

        if (totaltSum > 9) {
            cartAmountSpan.className = "big";
        } else {
            cartAmountSpan.className = "";
        }

        cartAmountSpan.innerHTML = JSON.stringify(totaltSum);
    }

    removeItCheck(i: number) {
        this.cartList.splice(i, 1);
        sessionStorage.setItem("cartList", JSON.stringify(this.cartList));
    }
}
