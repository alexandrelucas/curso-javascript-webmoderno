console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana'); // não muito recomendado

aprovados = ['Bia', 'Carlos', 'Ana']; // recomendado

console.log(aprovados[0]); // Bia
console.log(aprovados[1]); // Carlos
console.log(aprovados[2]); // Ana
console.log(aprovados[3]); // undefined

aprovados[3] = 'Paulo'; // Criação dinamica (apropriado para substituir)
aprovados.push('Abia'); // Apropriado para adição de elementos;
console.log(aprovados.length);

aprovados[9] = 'Rafael'; // Works; indice 4,5,6,7,8 existirão porém undefineds
console.log(aprovados[8] === undefined);

console.log(aprovados);

aprovados.sort(); // ordena o array em ordem alfabética e retorna um novo array

console.log(aprovados);

delete aprovados[1]; // possível


aprovados = ['Bia', 'Carlos', 'Ana'];
// aprovados.splice(1,1) // splice pode excluir ou adicionar neste caso exclui Carlos

aprovados.splice(1,2); // Exclui carlos e ana

aprovados.splice(1,2,'Elemento1','Elemento2'); // Exclui carlos e ana e adiciona Elemento1, Elemento2
