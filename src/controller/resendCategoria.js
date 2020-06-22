const response = require('../middlewares/categoria')

async function realizaResCategoria(req, res, next){
    if(req.body.status){
        res.status(200).send({"Message": "Cadastro realizado"})
    }
    else{
        res.status(404).send({"Message": "Cadastro inválido"})
    }
}

async function realizaResGetCategoria(req, res, next){
    if(req.body.status){
        res.status(200).send(response.recebeReq)
    }
    else{
        res.status(404).send({"Message": "Consulta inválida"})
    }
}

module.exports = { realizaResCategoria, realizaResGetCategoria }

