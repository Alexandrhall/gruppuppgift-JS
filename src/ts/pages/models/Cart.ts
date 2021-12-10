import { Game } from "./Game";

export class Cart{
    cartList:Game[];

    constructor(){
        this.cartList = JSON.parse(sessionStorage.getItem("cartList")) || [];
    }

    addToCart(product:Game){
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
}


