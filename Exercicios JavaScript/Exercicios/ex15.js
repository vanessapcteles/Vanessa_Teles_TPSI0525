
const prompt = require("prompt-sync")();

let continuar = true;
let inicio = 0;

const incremento = 20;
while (continuar && inicio <= 255) {
    let fim = Math.min(inicio + incremento - 1, 255);
    for (let i = inicio; i <= fim; i++) {
        console.log(`${i} - ${String.fromCharCode(i)}`);
    }
    inicio += incremento;
    if (inicio <= 255) {
        let resposta = prompt("Deseja continuar? (s/n): ").toLowerCase();
        if (resposta !== 's') {
            continuar = false;
        }
    }
}



