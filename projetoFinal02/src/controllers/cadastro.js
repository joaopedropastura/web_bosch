// Importando as tabelas do DB
const sala = require('../model/sala');
const aluno = require('../model/aluno');

module.exports = {
    async sala(req, res) {
        res.render('../views/sala');
    },
    async salaInsert(req, res) {
        const dados = req.body;
        // Recebe as informações do front-end
        // Criando sala no banco de dados
        await sala.create({
            Nome: dados.nome_sala,
            Capacidade: dados.capacidade_sala
        });
        // Redirecionar para a página principal
        res.redirect('/');
    },
    async alunoInsert(req, res) {
        // Recebendo as informações pelo Body
        const dados = req.body;
        // Nome padrão da foto
        let foto = 'usuario.png';
        // Criando aluno no banco de dados
        await aluno.create({
            Nome: dados.nome,
            Idade: dados.idade,
            Sexo: dados.sexo,
            IDSala: dados.sala,
            Foto: foto
        });
        // Redirecionar para a página principal
        res.redirect('/');
    }
}