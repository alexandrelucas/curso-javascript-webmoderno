let a = 1;
console.log(a);

let p = new Promise((resolve) =>{
    resolve({
        x: 3,
        y: 4
    }); // Apenas um parametro
}); // Objeto

p.then((valor) => valor.x)
    .then(x => console.log(x));

console.log(typeof Promise); // Function