import { Game } from "./pages/models/Game";


let gameOne:Game = new Game("Monopoly", 349, "./assets/monopoly.png", "A fun family game", true, false, true);
let gameList:Game[] = [gameOne];

window.onload = function () {
    console.log(gameList);
};
