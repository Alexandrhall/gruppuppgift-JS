window.onload = function () {
    document.getElementById("log").addEventListener("click", logToHome);
};

function logToHome() {
    location.href = "http://localhost:1234/index.html";
}
