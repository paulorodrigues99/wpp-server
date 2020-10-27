// Chama as dependências
let express = require('express');
let bodyParser = require('body-parser');
// let mongoose = require('mongoose');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conecta ao banco
// mongoose.connect('mongodb://localhost/b2wbruno');
// var db = mongoose.connection;

app.get('/', (req, res) => res.status(200).json({ status: "Ok" }));


module.exports = app;