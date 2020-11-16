// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa;

console.log("Nome: %s e Idade: %s", nome, idade);

const {nome: n, idade: i} = pessoa;


const { sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

// irá extrair apenas logradouro, numero e cep
const { endereco: {logradouro, numero, cep}} = pessoa;

// erro
const { conta: {ag, numero, } } = pessoa;