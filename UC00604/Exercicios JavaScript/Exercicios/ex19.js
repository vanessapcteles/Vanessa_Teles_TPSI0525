
function fibonacci() {
  let a = 1;
  let b = 1;
  let resultado;

  console.log("Os primeiros 60 números da série de Fibonacci são: ");
  console.log(a); // Primeiro número
  console.log(b); // Segundo número

  for (let i = 2; i < 60; i++) {
    resultado = a + b;
    a = b;
    b = resultado;
    console.log('Fibonacci: ' + a + " + " + b + " = "+ resultado);
  }
}

fibonacci();