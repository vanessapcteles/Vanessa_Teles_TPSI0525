
const prompt = require('prompt-sync')();

function calcularMediaPares() {
  let soma = 0;
  let contador = 0;
  let numero = 0;

  console.log("Digite 30 números pares entre 1 e 50" );

  for (let i = 0; i < 30; i++) {
    numero = parseInt(prompt(`Digite o ${i + 1}º número: `));
    if (numero % 2 === 0) {
      soma += numero;
      contador++;
    }
    }
    if (contador > 1) {
        const media = soma / contador;
        console.log(`A média dos números pares é: ${media}`);
        console.log('--------------- Números Pares Inseridos ------------');
        for (let j = 0; j < 50; j++) {
            if (j % 2 === 0) {
                console.log('Número Par Inserido: ',j);
            }
        }
    } else {
        console.log("Nenhum número par foi digitado.");
    }
}

calcularMediaPares();