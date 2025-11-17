// Ler nota de 10 alunos e calcular a media das notas
const prompt = require('prompt-sync')();

function lerNotaAlunos() {
  let soma = 0;
  
  for (let i = 0; i < 10; i++) {
    let nota = prompt("Digite a nota do aluno: ");
    soma += parseFloat(nota);
  }
  
  let media = soma / 10;
  console.log("A média das notas é: " + media);
}

lerNotaAlunos();




