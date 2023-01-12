// Iniciando Route do Express
const express = require('express');
const route = express.Router();
// Importando os Controllers
const home = require('./src/controllers/home');
// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.get('/alunos',home.pagAlunos);
route.get('/sala', home.PagSala);
module.exports = route;