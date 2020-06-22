const crud = require('../CRUDs/cruds')

async function insereCategoria(req, res, next) {
    try {
        const recebeReq = await crud.inserirCategoria(req.body.descricao)
        req.body['status'] = { "Message": "Sucesso!" }
        req.body['id_categoria'] = recebeReq.rows[0].id_categoria
    }
    catch (error) {
        req.body['status'] = { "Message": "Não cadastrado!" }
    }

    next()

}

async function selectCategoria(req, res, next){
    try{
        const recebeGet = await crud.findAllCategoria()
        req.body['status'] = { "Message": "Sucesso!" }
    }
    catch(error){
        req.body['status'] = {}
    }

    next()
}

module.exports = { insereCategoria, selectCategoria }