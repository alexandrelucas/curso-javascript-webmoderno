console.log(Math.ceil(6.1));

const obj1 = {};

obj1.nome = 'Bola'; // Criação dinamica 

// obj1['nome'] = 'Bola2;' ok
console.log(obj1.nome);

// Classe old-style
function Obj(nome) {
    this.nome = nome;
    this.exec = function() {
        console.log('Exec...');
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');

console.log(obj2.nome);
console.log(obj3.nome);

obj3.exec();
