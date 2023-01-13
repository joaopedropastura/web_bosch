// Iniciando Route do Express
const express = require('express');
const route = express.Router();
// Importando os Controllers
const home = require('./src/controllers/home');

const cadastro = require('./src/controllers/cadastro');
// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get('/alunos', cadastro.aluno);
route.get('/sala', cadastro.sala);

route.post('/alunos', cadastro.)
route.post('/salas', cadastro.salaInsert);
// route.get('/alunos', cadastro.sala);

module.exports = route;