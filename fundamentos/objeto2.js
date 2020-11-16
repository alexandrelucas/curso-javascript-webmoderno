console.log(typeof Object); // funcao
console.log(typeof new Object()); // instancia de funcao


const Cliente = function() {
    console.log(typeof Cliente); // funcao
    console.log(typeof new Cliente); //Objeto
}

class Produto {} // ES 2015 (ES6)

console.log(typeof Produto) // funcao
console.log(typeof new Produto()) // Objeto