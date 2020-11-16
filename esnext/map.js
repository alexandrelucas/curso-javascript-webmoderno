const tecnologias = new Map();
tecnologias.set('react', {framework: false});
tecnologias.set('angular', {framework: true});

console.log(tecnologias.react); // nao funciona
console.log(tecnologias.get('react')); // OK
console.log(tecnologias.get('angular').framework); // OK

const chavesVariadas = new Map([
    [function() {}, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Número'],
]);

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor);
});

console.log(chavesVariadas.has(123)); // Existe
console.log(chavesVariadas.delete(123)); // DELETA
console.log(chavesVariadas.has(123)); // Falso

console.log(chavesVariadas.size); // Tamanho