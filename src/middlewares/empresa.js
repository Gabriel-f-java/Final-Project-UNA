const crud = require('../CRUDs/cruds')

async function insereEmpresa(req, res, next) {

    let horario_atual = new Date();
    let data_cadastro = new Date(Date.UTC(horario_atual.getUTCFullYear(), horario_atual.getUTCMonth(), horario_atual.getUTCDate() ));

    try {      
        const recebeReq = await crud.inserirEmpresa(req.body.nome, req.body.cnpj, data_cadastro)
        req.body['id_empresa'] = recebeReq.rows[0].id_empresa
        req.body['status'] = { "Message": "Sucesso!" }
    }
    catch (error) {
        req.body['status'] = { "Message": "Não cadastrado!" }
    }

    next()

}

async function selectEmpresa(req, res, next){
    try{
        const recebeGet = await crud.findAllEmpresa()
        req.body['status'] = { "Message": "Sucesso!" }
        res.status(202).send(recebeGet.rows)
    }
    catch(error){
        req.body['status'] = {}
    }

    next()
}

module.exports = { insereEmpresa, selectEmpresa }