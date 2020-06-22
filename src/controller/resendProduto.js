const response = require('../middlewares/produto')

async function realizaResProduto(req, res, next){
    if(req.body.status){
        res.status(200).send({"Message": "Cadastro realizado"})
    }
    else{
        res.status(404).send({"Message": "Cadastro inválido"})
    }
}

module.exports = { realizaResProduto }