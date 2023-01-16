// Iniciando Route do Express
const express = require('express');
const route = express.Router();
// Importando os Controllers
const home = require('./src/controllers/home');

const cadastro = require('./src/controllers/cadastro');
// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get('/alunos', home.pagAlunos);
route.get('/sala', home.PagSala);

route.post('/alunos', cadastro.alunoInsert);
route.post('/salas', cadastro.salaInsert);
// route.get('/alunos', cadastro.sala);

module.exports = route;