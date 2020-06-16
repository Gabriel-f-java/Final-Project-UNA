const crud = require('../CRUDs/cruds')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

async function insereUsuario(req, res, next){

    const saltRound = 8;
    const hash = await bcrypt.hash(req.body.password, saltRound)
    
    try{
        let recebeReq = await crud.inserirUsuario(req.body.login, hash, req.body.id_pessoa)
        req.body['status'] = {"Message" : "Sucesso!"}
    }
    catch(error){
        req.body['status'] = {}
    }

    next()

}

async function loginUsuario(req, res, next){
    try{
        const login = await crud.loginUser(req.body.login)
        
        if(login){
            for(let linhas of login){
                console.log('asdfghj')
                let verificaHash = await bcrypt.compare( req.body.password, linhas.password )
            }

            console.log(verificaHash)

            if(login && verificaHash == true){
                console.log('verificaHash')
            }
            else{
                console.log('puta')
            }
        }
        else{
            error
        }
    }
    catch(error){
        console.log('ruim')
    }

    next()

}

module.exports = { insereUsuario, loginUsuario }