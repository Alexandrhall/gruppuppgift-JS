export function logToHome() {
    location.href = "http://localhost:1234/index.html";
}

window.onload = function () {};

export function categoryListeners(){
    document.getElementById("catAll").addEventListener("click", ()=>{
        goToCategory("all");
    });
    document.getElementById("catBoard").addEventListener("click", ()=>{
        goToCategory("board");
    });
    document.getElementById("catCard").addEventListener("click", ()=>{
        goToCategory("card");
    });
    document.getElementById("catFamily").addEventListener("click", ()=>{
        goToCategory("family");
    });
}

export function goToCategory(e){
    
}
