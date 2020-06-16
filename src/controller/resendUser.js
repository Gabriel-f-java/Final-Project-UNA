const response = require('../middlewares/usuario')

async function realizaRes(req, res){
    if(req.body.status){
        res.status(200).send({"Message": "Cadastro realizado"})
    }
    else{
        res.status(404).send({"Message": "Cadastro inválido"})
    }
}

module.exports = { realizaRes }