const prod1 = {
    id: 2
};

// Criação dinamica
prod1.nome = 'Celular ultra mega';
prod1.preco = 4999.90;
prod1['Desconto Legal'] = 0.40 // evitar 

console.log(prod1);

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90,
    detalhes: {
        descricao: "bla bla bla"
    }
};

// Json
let json = '{"nome": "Camisa Polo","preco": 79.90,"detalhes": {"descricao": "bla bla bla"}}';
console.log(JSON.stringify(prod2));