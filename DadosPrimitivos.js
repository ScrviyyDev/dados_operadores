// String - Suporta aspas simples, aspas duplas e crase para template strings.
const nome = 'Junior';
const nome1 = "Junior";
const nome2 = `Junior`;

// Number
const num1 = 10; const num2 = 10.52;

// undefined e nulo.
let nomeAluno; let sobrenomeAluno = null;

// boolean - verdadeiro ou false.
const aprovado = false;

// typeof - operador para verificar o tipo de valor de uma variável
console.log(typeof nome);
console.log(typeof nomeAluno);
console.log(typeof aprovado);

// dados por referência
const a = [1, 2];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b);