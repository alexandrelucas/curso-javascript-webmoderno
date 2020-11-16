// Armazenando uma função em uma variável

const imprimirSoma = function(a,b) {
    console.log(a + b);
}

imprimirSoma(2,3);

// Armazenando uma funcao arrow em uma variavel

const soma = (a,b) => {
    return a + b;
};

const subtracao = (a,b) => a - b;

const imprimir2 = a => console.log(a);
imprimir2('Legaaal!!!');