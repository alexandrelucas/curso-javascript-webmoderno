let isAtivo = false;
console.log(isAtivo);

isAtivo = true;

console.log(isAtivo);

isAtivo = 1;

console.log(isAtivo); // imprime Numerico;

console.log(!!isAtivo); // imprime true;

console.log('Os verdadeiros...');
console.log(!!3); // true;
console.log(!!-1); // verdadeiro
console.log(!!' '); // verdadeiro
console.log(!![]); // verdadeiro
console.log(!!{}); // verdadeiro
console.log(!!Infinity) // verdadeiro
console.log(!!(isAtivo = true)) // verdadeiro

console.log(!!0); // falso
console.log(!!null); // falso
console.log(!!''); // falso
console.log(!!NaN); // falso
console.log(!!undefined); // falso
console.log(!!(isAtivo = false)); // falso

console.log('pra finalizar...');
console.log('' || null || 0);

let nome = 'Lucas';

console.log(nome || 'Desconhecido');