function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if(Math.random() < chanceErro) {
                // Erro
                reject('Ocorreu um erro!');
            } else {
                resolve(valor);
            }
        }catch(e) {
            reject(e);
        }
       
    });
}

funcionarOuNao('Testando', 0.8)
    .then(console.log)
    .then(v => console.log(v), err => console.log('Erro')) // Erro específico
    .catch(console.log);