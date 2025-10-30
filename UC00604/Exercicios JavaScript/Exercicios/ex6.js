// criar um algoritmo que mostre os 10 primeiros numeros primos
const prompt = require('prompt-sync')();

let primos = [1,2,3,4,5,6,7,8,9,10];

function mostrarPrimos() {
    for (let i = 0; i < primos.length; i++) {
    let numero = primos[i];

    if (numero % 2 === 0) {
      console.log(numero + " é primo");
    } 
}
}
mostrarPrimos();
