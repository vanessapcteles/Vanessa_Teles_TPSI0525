// Criar um algoritmo que leia um numero inteiro, e diga se ele é primo ou não.
const prompt = require('prompt-sync')();

function verificarPrimo() {
    let numero = parseInt(prompt("Digite um número inteiro: "));

    if (numero % 2 === 0) {
      console.log(numero + " é primo");
    } else {
      console.log(numero + " não é primo");
    }
  }

verificarPrimo();
