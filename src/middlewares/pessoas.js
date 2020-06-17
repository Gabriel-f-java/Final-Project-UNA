const crud = require('../CRUDs/cruds')

async function inserePessoa(req, res, next){
    try{
        const recebeReq = await crud.inserirPessoa(req.body.nome, req.body.rg, req.body.cpf, req.body.data_nascimento)
        req.body['id_pessoa'] = recebeReq.rows[0].id_pessoa
        req.body['status'] = {"Message" : "Sucesso!"}
    }
    catch(error){
        req.body['status'] = {"Message" : "Erro ao cadastrar!"}
    }

    next()

}

module.exports = { inserePessoa }