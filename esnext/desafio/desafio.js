const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');
function exibirConteudo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(caminho, (err, data) => {
                resolve(data.toString());
            });
        } catch(e) {
            reject("Nao foi possivel ler o arquivo.");
        }
    });
}

exibirConteudo(caminho)
    .then(conteudo => conteudo.split('\n')) // Separa as linhas em \n
    .then(console.log);