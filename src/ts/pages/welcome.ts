window.onload = function(){
    document.getElementById("continueButton").addEventListener("click", enterShop);
}

function enterShop(){
    window.location.href = "../pages/products.html";
}

sessionStorage.setItem("display", "all");