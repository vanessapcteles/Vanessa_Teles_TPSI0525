
const prompt = require('prompt-sync')();

function verificarNumeroPerfeito() {
  let input = prompt("Digite um número para verificar se ele é perfeito:");
  let numero = parseInt(input);
  let somaDosDivisores = 0;

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      somaDosDivisores += i;
    }
  }

  if (somaDosDivisores === numero) {
    console.log(`${numero} é um número perfeito.`);
  } else {
    console.log(`${numero} não é um número perfeito.`);
  }
}
verificarNumeroPerfeito();