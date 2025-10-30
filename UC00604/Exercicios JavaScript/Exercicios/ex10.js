
const prompt = require('prompt-sync')();

function contarDivisores() {
    let numero = parseInt(prompt("Digite um número inteiro: "));
    let contador = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contador++;
        }
    }
    console.log("O número " + numero + " possui " + contador + " divisores.");
}
contarDivisores();