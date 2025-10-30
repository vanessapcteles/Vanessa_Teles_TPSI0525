

function encontrarMultiplos() {
  console.log("Múltiplos de 5 que não são múltiplos de 3 (de 1 a 1000):");

  for (let i = 1; i <= 1000; i++) {
    if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}
encontrarMultiplos();