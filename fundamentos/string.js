const escola = "Cod3r";

console.log(escola.charAt(4)); // r
console.log(escola.charAt(5)); // vazio
console.log(escola.charCodeAt(3)); // Tabela ASCII/Unicode
console.log(escola.indexOf('3'));

console.log(escola.substring(1)); // od3r;
console.log(escola.substring(0,3)); //Cod

console.log('Escola '.concat(escola).concat("!")); // Escola Cod3r!
console.log(escola.replace(/\d/, 'e')); // Regex

console.log('Ana, Maria, Pedro'.split(','));