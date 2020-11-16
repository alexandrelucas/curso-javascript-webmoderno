function falarDepoisDe(segundos, frase) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(frase); // Resolve passa apenas um parametro
            // reject('Deu erro');
        }, segundos * 1000);  // Simular uma atividade demorada.
    });
}

falarDepoisDe(3, 'Que legal!')
    .then((frase) => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log("Imprimir Erro"));