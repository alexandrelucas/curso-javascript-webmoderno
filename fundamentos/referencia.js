// atribuição por referencia
// a aponta para o objeto {name: "Teste"}
const a = {name: "teste"};

// b recebe o mesmo endereço que o A aponta
const b = a;

b.name = 'Opa';

console.log(a);


// Tipos primitivos são copiados diferente de objetos que trabalha com referencia


let c = 3;
let d = c;

d++;

console.log(c); // 3
console.log(d); // 4