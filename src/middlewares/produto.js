const crud = require('../CRUDs/cruds')

async function insereProduto(req, res, next) {
    console.log(req.body)

    try {
        const recebeReq = await crud.inserirProduto(req.body.nome, req.body.valor, req.body.id_empresa, req.body.id_categoria)
        req.body['status'] = { "Message": "Sucesso!" }
        res.status(202).send({"Message" : "Deu bom"})
    }
    catch (error) {
        req.body['status'] = {}
    }

    next()

}

module.exports = { insereProduto }