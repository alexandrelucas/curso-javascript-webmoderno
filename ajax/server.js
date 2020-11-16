const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload');
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`);
    }
})

const upload = multer({ storage }).single('arquivo');

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.');
        }

        res.end('Concluído com sucesso.');
    })
});

let id = 0;

app.post('/formulario', (req, res) => {
    
    if(req.body) {
        res.send({
        ...req.body,
        id: ++id
        });
    }
});

app.get('/parOuImpar', (req, res) => {
    // req.body post
    // req.query get url
    // req.params get /:param
    const par = parseInt(req.query.numero) % 2 === 0;

    res.send({
        resultado: par? 'par':'impar'
    });
});

app.listen(3000, () => console.log('Executando...'));