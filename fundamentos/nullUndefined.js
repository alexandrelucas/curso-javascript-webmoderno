let valor; // Não inicializada

console.log(valor) // undefined
console.log(valor2) // Is not defined (não declarado)

valor = null; // Variável que não aponta pra nenhum endereço de memória

console.log(valor.toString()); // tentando acessar uma variavel que nao aponta pra nada, gera um erro.

const produto = {}; // declarado um objeto vazio

console.log(produto.preco); // preco undefined

produto.preco = undefined; // evitar atribuir de forma explicita o undefined;
console.log(!!produto.preco); // false
// delete produto.preco // deixa o objeto vazio
console.log(produto); // {}

produto.preco = null // sem preco