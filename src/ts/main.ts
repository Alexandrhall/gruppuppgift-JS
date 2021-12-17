export function logToHome() {
    location.href = "http://localhost:1234/index.html";
}

export function categoryListeners() {
    document.getElementById("catAll").addEventListener("click", () => {
        sessionStorage.setItem("display", "all");
        location.href = "http://localhost:1234/pages/products.html";
    });
    document.getElementById("fotAll").addEventListener("click", () => {
        sessionStorage.setItem("display", "all");
        location.href = "http://localhost:1234/pages/products.html";
    });
    document.getElementById("catBoard").addEventListener("click", () => {
        sessionStorage.setItem("display", "board");
        location.href = "http://localhost:1234/pages/products.html";
    });
    document.getElementById("fotBoard").addEventListener("click", () => {
        sessionStorage.setItem("display", "board");
        location.href = "http://localhost:1234/pages/products.html";
    });
    document.getElementById("catCard").addEventListener("click", () => {
        sessionStorage.setItem("display", "card");
        location.href = "http://localhost:1234/pages/products.html";
    });
    document.getElementById("fotCard").addEventListener("click", () => {
        sessionStorage.setItem("display", "card");
        location.href = "http://localhost:1234/pages/products.html";
    });
    document.getElementById("catFamily").addEventListener("click", () => {
        sessionStorage.setItem("display", "family");
        location.href = "http://localhost:1234/pages/products.html";
    });
    document.getElementById("fotFamily").addEventListener("click", () => {
        sessionStorage.setItem("display", "family");
        location.href = "http://localhost:1234/pages/products.html";
    });
}
