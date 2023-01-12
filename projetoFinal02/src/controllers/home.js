module.exports = {
    async pagInicialGet(req, res){
    res.render('../views/index');
    },
    async pagAlunos(req, res){
        res.render('../views/alunos')
    },
    async PagSala(req, res){
        res.render('../views/sala')
    }
}