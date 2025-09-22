const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Insira um número para a seguinte tabuada: "));

let tabuada = 1;

console.log(`Tabuada do ${numero}:`);
while (tabuada <= 10) {
    const resultado = numero * tabuada;
    console.log(`${numero} x ${tabuada} = ${resultado}`);
    tabuada++;
}
