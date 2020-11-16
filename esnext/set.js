// não aceita repetição/não indexada

const times = new Set();
times.add('Vasco');
times.add('São Paulo').add('Palmeiras').add('Corinthians'); // OK
times.add('Flamengo');
times.add('Vasco'); // Ignorado

console.log(times);
console.log(times.size); // Tamanho;
console.log(times.has('vasco')); // False
console.log(times.has('Vasco')); // True
times.delete('Flamengo'); // OK;
console.log(times.has('Flamengo')); // False