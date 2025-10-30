
const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Insira um número inteiro para realizar as seguintes operações: "));

  let soma = numero;
  let subtracao = numero;
  let multiplicacao = numero;
  let divisao = numero;
  
  let contadorOperacoes = 0;

  for (let i = 1; i < numero; i++) {
    console.log(`\nOperação com o número ${numero} e o número ${i}:`);

    // Soma
    soma += i;
    console.log(`Soma: ${numero} + ${i} = ${soma}`);
    contadorOperacoes++;

    // Subtração
    subtracao -= i;
    console.log(`Subtração: ${numero} - ${i} = ${subtracao}`);
    contadorOperacoes++;

    // Multiplicação
    multiplicacao *= i;
    console.log(`Multiplicação: ${numero} * ${i} = ${multiplicacao}`);
    contadorOperacoes++;

    // Divisão (com verificação para evitar divisão por zero)
    if (i !== 0) {
      divisao /= i;
      console.log(`Divisão: ${numero} / ${i} = ${divisao}`);
      contadorOperacoes++;
    }

  console.log("\n--- Resumo das Operações ---");
  console.log(`Número: ${numero}`);
  console.log(`Total de operações efetuadas: ${contadorOperacoes}`);
}

