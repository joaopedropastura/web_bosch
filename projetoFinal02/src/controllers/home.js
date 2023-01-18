const sala = require('../model/sala')
const aluno = require('../model/aluno')

module.exports = {
    async pagInicialGet(req, res){
        const salas = await sala.findAll({
            raw: true,
            attributes: ['IDSala', 'Nome']
        });
        res.render('../views/index', {salas, alunos: '', id: ''});
        // res.render('../views/index', {salas});
    },
    async pagInicialPost(req, res){
        const id = req.body.nome;
        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Foto', 'Sexo'],
            where: { IDSala: id }
        });
        const salas = await sala.findAll({ 
            raw: true, 
            attributes: ['IDSala', 'Nome'] 
        });
        
        if(id == 'invalido')
        {
            res.render('../views/index', {salas, alunos : '', id : ''});
            return;
        }
        
        res.render('../views/index', {salas, alunos : alunos, id : id});
        

    },
    // async pagAlunos(req, res){
    //     res.render('../views/alunos')
    // },
    async PagSala(req, res){
        res.render('../views/sala')
    },
    async pagAlunos(req, res) {
        // Encontrando todas as salas disponíveis no SQL
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDSala', 'Nome']
        });
        // Renderizando e passando o nome das salas para o front
        res.render('../views/alunos', { salas });
    }
}