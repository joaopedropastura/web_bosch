const sala = require('../model/sala');
const aluno = require('../model/aluno');


module.exports = {
    async adicionar(req, res){
        const dados = req.body;
        const id = req.params.id;
        
        console.log(dados)

        if (req.file) {
            const antigaFoto = await aluno.findAll({
                raw: true,
                attributes: ['Foto'],
                where: { IDAluno: id }
            });
                // Excluindo a foto da pasta
            if (antigaFoto[0].Foto != 'usuario.png') 
                FileSystem.unlink(`public/img/${antigaFoto[0].Foto}`, ( err => { if(err) console.log(err); } ));
        // Update da nova foto no DB
            await aluno.update(
                { Foto: req.file.filename },
                { where: { IDAluno: id } }
            );
        }

        // Dando upgrade nas novas informações
        await aluno.update({
            Nome: dados.nome,
            Idade: dados.idade,
            Sexo: dados.sexo,
            IDSala: dados.sala,
        },
        {
            where: { IDAluno: id }
        });
        
        res.redirect('/');
    }
}