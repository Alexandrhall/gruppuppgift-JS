import { ContentOfCart } from "./ContentOfCart";
import { Game } from "./Game";

export class Cart{
    cartList:ContentOfCart[];

    constructor(){
        this.cartList = JSON.parse(sessionStorage.getItem("cartList")) || [];
    }

    addToCart(product:ContentOfCart){
        //Kollar om listan innehåller något
        if(this.cartList.length != 0){
            // Sätter variabeln cartList till samma innehåll som den i storage
            this.cartList = JSON.parse(sessionStorage.getItem("cartList"));
        }
        //Lägger in en produkt i listan
        this.cartList.push(product);

        //Sätter uppdaterad lista i storage
        sessionStorage.setItem("cartList", JSON.stringify(this.cartList));
    
        console.log(this.cartList); 
    }

    removeIt(i:number) {
        this.cartList.splice(i, 1);
        sessionStorage.setItem("cartList", JSON.stringify(this.cartList));
        //createHTML();
        
    }
    
    addAmount(i:number) {
        let inputAmount: HTMLInputElement = document.getElementById(
            "valueAmount" + (i + 1)
        ) as HTMLInputElement;
    
        this.cartList[i].amount = parseInt(inputAmount.value);
    
        sessionStorage.setItem("cartList", JSON.stringify(this.cartList));
        //createHTML();
    }
}


