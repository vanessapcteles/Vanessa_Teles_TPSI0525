
const prompt = require('prompt-sync')();

function verificarParImpar() {

  for (let i = 0; i < 10; i++) {
    let numero = prompt("Digite um número:");

    if (numero % 2 === 0) {
      console.log(numero + " é par");
    } else {
      console.log(numero + " é ímpar");
    }
  }

}

verificarParImpar();
