
let tabuada = 1;

for (let n = 1; n <= 100; n++) {
    console.log(`\nTabuada do ${n}:`);
    tabuada = 1;
    while (tabuada <= 10) {
        const resultado = n * tabuada;
        console.log(`${n} x ${tabuada} = ${resultado}`);
        tabuada++;
    }
}

