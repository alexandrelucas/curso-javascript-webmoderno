// funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b || b || a); //tratamento de undefined
}

imprimirSoma(10,5);

// funcao com retorno
function soma(a, b = 0) {
    return a + b;
}
console.log(soma(2,3));