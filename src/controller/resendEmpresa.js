const response = require('../middlewares/empresa')

async function realizaResEmpresa(req, res, next){
    if(req.body.status){
        res.status(200).send({"Message": "Cadastro realizado"})
    }
    else{
        res.status(404).send({"Message": "Cadastro inválido"})
    }
}

async function realizaResGetEmpresa(req, res, next){
    if(req.body.status){
        res.status(200).send(recebeGet.rows)
    }
    else{
        res.status(404).send({"Message": "Consulta inválida"})
    }
}

module.exports = { realizaResEmpresa, realizaResGetEmpresa }