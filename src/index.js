const prompt = require("prompt-sync")({ sigint: true });

function winsBalance(win, loses) {
    return win - loses;
}

console.log("Quantas partidas você venceu?");
let win = parseInt(prompt());

console.log("Quantas partidas você perdeu?");
let loses = parseInt(prompt());

let result = winsBalance(win, loses);
let level = "";

if (result < 10) {
    level = "Ferro";
} else if (result <= 20) {
    level = "Bronze";
} else if (result <= 50) {
    level = "Prata";
} else if (result <= 80) {
    level = "Ouro";
} else if (result <= 90) {
    level = "Diamante";
} else if (result <= 100) {
    level = "Lendário";
} else if (result >= 101) {
    level = "Imortal";
}

console.log("O herói tem o balanço de " + result + " e seu nível é " + level);
