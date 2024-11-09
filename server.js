const express = require('express');
const app = express();

let objetos = [];

app.get('/teste/:id', (req, res) => {
    res.send('O id digitado foi: ' + req.params.id);
});

app.post('/publicacao/:texto', (req, res) => {
    let objetoTeste = {
        texto: req.params.texto
    }
    res.json(objetoTeste);
    objetos.push(objetoTeste);
});

app.delete('/publicacao', (req, res) => {
    objetos.pop();
    res.send("Deletado!")
})

app.get('/publicacao', (req, res) => {
    res.json(objetos);
});

app.listen(3000, () => {
    console.log('Server started');
});