import { Game } from "./Game";

export class Cart{
    cartList:Game[];

    constructor(){
        this.cartList = JSON.parse(sessionStorage.getItem("cartList")) || [];
    }

    addToCart(product:Game){
        //Kollar om listan är tom
        if(this.cartList.length === 0){
            //Lägger in en produkt i listan
            this.cartList.push(product);
    
            //Sätter in listan i sessionStorage
            sessionStorage.setItem("cartList", JSON.stringify(this.cartList));
        }else{
            // Sätter variabeln cartList till samma innehåll som den i storage
            this.cartList = JSON.parse(sessionStorage.getItem("cartList"));
    
            // Lägger till produkten i cartList
            this.cartList.push(product);
        }
    
        sessionStorage.setItem("cartList", JSON.stringify(this.cartList));
    
        console.log(this.cartList); 
    }
}