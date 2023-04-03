// Operadores Aritméticos, atribuição e incremento.

/**
 * Operadores Aritméticos
 * + Adição / Concatenação
 * - Subtração
 * / Divisão 
 * % Resto da divisão
 * * Multiplicação
 * ** Potenciação
 */

// Uma operador com multiplicação e divisão será executada primeiro, caso não estiver parênteses na operação.

/**
 * Precedência dos operadores
 * ()
 * **
 * * / &
 * + - 
 */

const num1 = 10;
const num2 = 3;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

let contador = 1;
console.log(contador);

contador++;
console.log(contador);

contador--;
console.log(contador);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("---------------------");

for (let j = 10; j >= 0; j--) {
    console.log(j);
}